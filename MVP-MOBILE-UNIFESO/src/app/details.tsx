import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { useLocalSearchParams, Stack, router } from 'expo-router';
import MobileFooter from '../components/Footer';
import Button from '../components/Button';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';

const DetailsScreen: React.FC = () => {
  const params = useLocalSearchParams();

  const documentId = params.documentId as string
  const [isAdmin, setIsAdmin] = useState(false)

  const itemType = params.type as 'trail' | 'event';
  const nome = params.nome as string;
  const descricao = params.desc as string;

  // Campos específicos de trilha
  const nivel = params.nivel as string | undefined;
  const km = params.km as string | undefined;
  const tempo = params.tempo as string | undefined;

  // Campos específicos de evento
  const tipo = params.tipo as string | undefined;
  const duracao = params.duracao as string | undefined;
  const local = params.local as string | undefined;

  useEffect(() => {
    async function checkAdmin() {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().admin) {
          setIsAdmin(true);
          console.log('é admin')
        }
      }
    }
    checkAdmin();
  }, []);

  const handleDelete = async () => {
    if (!documentId) return;

    try {
      const collectionName = itemType === 'trail' ? 'trilhas' : 'eventos';
      await deleteDoc(doc(db, collectionName, documentId));
      alert('Item excluído com sucesso!');
      router.replace('/main');
    } catch (error) {
      console.error('Erro ao excluir:', error);
      alert('Erro ao excluir. Tente novamente.');
    }
  }


  if (!nome || !descricao) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Detalhes não encontrados.</Text>
        <MobileFooter />
      </View>
    );
  }

  return (
    <View style={styles.outerContainer}>
      <Stack.Screen options={{ title: nome }} />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{nome}</Text>
        <Text style={styles.description}>{descricao}</Text>

        {itemType === 'trail' && (
          <>
            <Text style={styles.detailItem}>Nível: {nivel}</Text>
            <Text style={styles.detailItem}>Extensão: {km} km</Text>
            <Text style={styles.detailItem}>Tempo Estimado: {tempo} min</Text>
          </>
        )}

        {itemType === 'event' && (
          <>
            <Text style={styles.detailItem}>Tipo: {tipo}</Text>
            <Text style={styles.detailItem}>Duração: {duracao} min</Text>
            <Text style={styles.detailItem}>Local: {local}</Text>
            <Button
              title="Inscrever-se"
              onPress={() => { }}
              textStyle={{ color: '#185221', fontSize: 22, fontWeight: '600' }}
            />
          </>
        )}
        {isAdmin && (
          <View style={{ marginTop: 20 }}>
            <Button title="Apagar" onPress={handleDelete}
              textStyle={{ color: 'red', fontSize: 22, fontWeight: '600' }} />
          </View>
        )}
      </ScrollView>
      <MobileFooter />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  outerContainer: { flex: 1 },
  container: { flexGrow: 1, padding: 20, alignItems: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#3E7D47', marginBottom: 15, textAlign: 'center' },
  description: { fontSize: 16, textAlign: 'justify', marginBottom: 20, color: '#333', backgroundColor: '#d6d2d2', padding: 15, borderRadius: 10 },
  detailItem: { fontSize: 16, marginBottom: 8, color: '#555' },
  errorText: { fontSize: 18, color: 'red', textAlign: 'center' },
});
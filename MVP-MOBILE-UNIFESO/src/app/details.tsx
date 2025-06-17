import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import MobileFooter from '../components/Footer';
import Button from '../components/Button';

interface TrailDetails {
    id: number;
    nome: string;
    nivel?: string;
    extensao_km?: number;
    tempo_estimado_min?: number;
    descricao: string;
}

interface EventDetails {
    id: number;
    nome: string;
    tipo?: string;
    duracao_min?: number;
    local?: string;
    descricao: string;
}

type ItemDetails = TrailDetails | EventDetails;

const DetailsScreen: React.FC = () => {
    const params = useLocalSearchParams();
    const itemString = params.item as string;
    const itemType = params.type as 'trail' | 'event';

    let item: ItemDetails | null = null;
    if (itemString) {
        try {
            item = JSON.parse(itemString);
        } catch (e) {
            console.error("Erro ao parsear JSON do item:", e);
        }
    }

    if (!item) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Detalhes não encontrados.</Text>
                <MobileFooter />
            </View>
        );
    }

    return (
        <View style={styles.outerContainer}>
            <Stack.Screen options={{ title: item.nome || 'Detalhes' }} />
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>{item.nome}</Text>
                <Text style={styles.description}>{item.descricao}</Text>

                {itemType === 'trail' && 'nivel' in item && (
                    <>
                        <Text style={styles.detailItem}>Nível: {item.nivel}</Text>
                        <Text style={styles.detailItem}>Extensão: {item.extensao_km} km</Text>
                        <Text style={styles.detailItem}>Tempo Estimado: {item.tempo_estimado_min} min</Text>
                    </>
                )}

                {itemType === 'event' && 'tipo' in item && (
                    <>
                        <Text style={styles.detailItem}>Tipo: {item.tipo}</Text>
                        <Text style={styles.detailItem}>Duração: {item.duracao_min} min</Text>
                        <Text style={styles.detailItem}>Local: {item.local}</Text>
                        <Button
                            title="Inscrever-se" onPress={() => { }}
                            textStyle={{ color: '#185221', fontSize: 22, fontWeight: '600' }}
                        />
                    </>
                )}
            </ScrollView>
            <MobileFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: { flex: 1 },
    container: { flexGrow: 1, padding: 20, alignItems: 'center' },
    title: { fontSize: 28, fontWeight: 'bold', color: '#3E7D47', marginBottom: 15, textAlign: 'center' },
    description: { fontSize: 16, textAlign: 'justify', marginBottom: 20, color: '#333', backgroundColor: '#d6d2d2', padding: 15, borderRadius: 10 },
    detailItem: { fontSize: 16, marginBottom: 8, color: '#555' },
    errorText: { fontSize: 18, color: 'red', textAlign: 'center' },
});

export default DetailsScreen;
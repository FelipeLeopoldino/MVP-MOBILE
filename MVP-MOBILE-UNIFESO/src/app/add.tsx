import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'expo-router';
import { db } from '../lib/firebase';

const CreateItemScreen: React.FC = () => {
    const [type, setType] = useState<'trail' | 'event'>('trail')

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')

    const [nivel, setNivel] = useState('')
    const [km, setKm] = useState('')
    const [tempo, setTempo] = useState('')

    const [local, setLocal] = useState('')
    const [tipo, setTipo] = useState('')
    const [duracao, setDuracao] = useState('')

    const router = useRouter();

    const handleSave = async () => {
        try {
            if (type === 'trail') {
                await addDoc(collection(db, 'trilhas'), {
                    nome,
                    desc,
                    nivel,
                    km,
                    tempo,
                });
            } else {
                await addDoc(collection(db, 'eventos'), {
                    nome,
                    desc,
                    tipo,
                    local,
                    duracao,
                });
            }
            alert('Item criado com sucesso!');
            router.back();
        } catch (error) {
            console.error('Erro ao salvar:', error);
            alert('Erro ao salvar. Tente novamente.');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Criar {type === 'trail' ? 'Trilha' : 'Evento'}</Text>

            <View style={styles.typeSelector}>
                <TouchableOpacity onPress={() => setType('trail')} style={[styles.typeButton, type === 'trail' && styles.selected]}>
                    <Text>Trilha</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setType('event')} style={[styles.typeButton, type === 'event' && styles.selected]}>
                    <Text>Evento</Text>
                </TouchableOpacity>
            </View>

            <TextInput placeholder="Nome" value={nome} onChangeText={setNome} style={styles.input} />
            <TextInput placeholder="Descrição" value={desc} onChangeText={setDesc} style={styles.input} multiline />

            {type === 'trail' ? (
                <>
                    <TextInput placeholder="Nível" value={nivel} onChangeText={setNivel} style={styles.input} />
                    <TextInput placeholder="Km" value={km} onChangeText={setKm} style={styles.input} keyboardType="numeric" />
                    <TextInput placeholder="Tempo (min)" value={tempo} onChangeText={setTempo} style={styles.input} keyboardType="numeric" />
                </>
            ) : (
                <>
                    <TextInput placeholder="Tipo" value={tipo} onChangeText={setTipo} style={styles.input} />
                    <TextInput placeholder="Local" value={local} onChangeText={setLocal} style={styles.input} />
                    <TextInput placeholder="Duração (min)" value={duracao} onChangeText={setDuracao} style={styles.input} keyboardType="numeric" />
                </>
            )}

            <Button title="Salvar" onPress={handleSave} color="#3E7D47" />
        </View>
    );
};

export default CreateItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3E7D47'
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5
    },
    typeSelector: {
        flexDirection: 'row',
        marginBottom: 20
    },
    typeButton: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    selected: {
        backgroundColor: '#d0f0d0'
    },
})
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { db } from '../lib/firebase';
import { Ionicons } from '@expo/vector-icons';
import MobileFooter from '../components/Footer';

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
            router.replace('/main');
        } catch (error) {
            console.error('Erro ao salvar:', error);
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => router.replace('/main')} style={styles.backButton}>
                    <Ionicons name="chevron-back-outline" size={30} color="#333" />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Criar {type === 'trail' ? 'Trilha' : 'Evento'}
                </Text>
            </View>
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
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={nivel}
                            onValueChange={(itemValue) => setNivel(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Selecione o Nível" value="" />
                            <Picker.Item label="Fácil" value="facil" />
                            <Picker.Item label="Intermediário" value="intermediário" />
                            <Picker.Item label="Difícil" value="dificil" />
                        </Picker>
                    </View>
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

            <MobileFooter />
        </View>
    );
};

export default CreateItemScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'ios' ? 40 : 20,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        position: 'relative',
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    headerText: {
        flex: 1,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#3E7D47',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
        backgroundColor: '#fff',
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
    pickerContainer: {
        borderWidth: 1,
        borderColor: '#fffbfb',
        borderRadius: 10,
        marginBottom: 15,
        justifyContent: 'center',

    },
    picker: {
        height: 50,
        width: '100%',
    }
})
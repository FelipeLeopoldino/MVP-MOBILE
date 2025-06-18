import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '~/src/components/Button';
import { registerUser } from '../lib/auth';

const RegisterScreen: React.FC = () => {
    const router = useRouter()

    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
    })

    function handleChange(field: keyof typeof form, value: string) {
        setForm({ ...form, [field]: value });
    }


    const handleRegister = async () => {
        try {
            await registerUser({
                nome: form.nome,
                email: form.email,
                senha: form.senha,
            })
            router.replace('/login')
        } catch (error: any) {
            console.log('Erro: ', error)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome"
                placeholderTextColor="#000"
                value={form.nome}
                onChangeText={(text) => handleChange('nome', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="E-mail"
                placeholderTextColor="#000"
                value={form.email}
                onChangeText={(text) => handleChange('email', text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                placeholderTextColor="#000"
                secureTextEntry
                value={form.senha}
                onChangeText={(text) => handleChange('senha', text)}
            />
            
            <Button
                title="Cadastrar"
                onPress={handleRegister}
                style={{ backgroundColor: '#3E7D47', paddingHorizontal: 70, marginTop: 20 }}
                textStyle={{ color: '#fff', fontSize: 18, fontWeight: '600' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#000',
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 15,
        marginBottom: 15,
        color: '#000',
    }
});

export default RegisterScreen;
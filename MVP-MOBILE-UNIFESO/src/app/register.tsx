import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '~/src/components/Button';

const RegisterScreen: React.FC = () => {
    const router = useRouter();

    const handleLogin = () => {
        router.replace('/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cadastre-se</Text>
            <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#000" />
            <TextInput style={styles.input} placeholder="E-mail" placeholderTextColor="#000" />
            <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#000" secureTextEntry />
            <Button
                title="Cadastrar"
                onPress={handleLogin}
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
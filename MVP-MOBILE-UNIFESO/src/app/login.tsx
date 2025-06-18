import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import Button from '~/src/components/Button';
import { loginUser } from '../lib/auth';

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: '', senha: '' });

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleLogin() {
    if (!form.email || !form.senha) {
      console.log('Preencha todos os campos');
      return;
    }
    try {
      await loginUser(form.email, form.senha);
      console.log('Parabéns, você logou!');
      router.replace('/main');
    } catch {
      console.log('Email ou senha incorretos!');
    }
  }

  const handleRegister = () => {
    router.replace('/register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

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
        title="Login"
        onPress={handleLogin}
        style={{ backgroundColor: '#3E7D47', paddingHorizontal: 70, marginTop: 20 }}
        textStyle={{ color: '#fff', fontSize: 18, fontWeight: '600' }}
      />

      <Text style={{ marginTop: 20 }}>Não tem cadastro?</Text>
      <Text style={{ color: '#3E7D47', fontWeight: 'bold' }} onPress={handleRegister}>
        Registre Aqui!
      </Text>
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
  },
});

export default LoginScreen;
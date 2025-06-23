import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import MobileFooter from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';
import Button from '../components/Button';
import { router } from 'expo-router';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { getUserData } from '../lib/auth';

const ConfigScreen: React.FC = () => {
    const userProfileImageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png';
    const [userData, setUserData] = useState<any>(null)
    const [uid, setUid] = useState<string | null>(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                try {
                    setUid(user.uid)
                    const data = await getUserData(user.uid)
                    setUserData(data)
                } catch (error) {
                    console.error("Erro ao buscar dados:", error)
                }
            }
        })
        return () => unsubscribe()
    }, [])

    const handleChangePassword = () => {
        console.log("Trocar senha pressionado");
    }

    const handleChangeDados = () => {
        console.log("Trocar senha pressionado");
    }

    const handleLogout = async () => {
        await signOut(auth)
        router.replace('/login');
    }

    if (!userData) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3E7D47" />
                <Text>Carregando dados...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: userProfileImageUrl }}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>{userData.nome}</Text>
            </View>

            <TouchableOpacity style={styles.optionItem} onPress={handleChangeDados}>
                <Text style={styles.optionText}>Dados</Text>
                <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionItem} onPress={handleChangePassword}>
                <Text style={styles.optionText}>Trocar Senha</Text>
                <Ionicons name="chevron-forward-outline" size={24} color="#ccc" />
            </TouchableOpacity>

            <View style={{ marginHorizontal: 80, marginTop: 20 }}            >
                <Button
                    title="Sair"
                    onPress={handleLogout}
                    textStyle={{ color: '#eb190a', fontSize: 18, fontWeight: '600' }}
                />
            </View>

            <MobileFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    profileHeader: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: '#fff',
        marginBottom: 40,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    optionItem: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginBottom: 10,

    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    footerContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ConfigScreen;


import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import MobileFooter from '../components/Footer';
import { Ionicons } from '@expo/vector-icons'; // Para um ícone de seta, opcional
import Button from '../components/Button';
import { router } from 'expo-router';

const ConfigScreen: React.FC = () => {
    const userName = "Felipe Leopoldino";
    const userProfileImageUrl = 'https://cdn-icons-png.flaticon.com/512/3135/3135768.png';

    const handleChangePassword = () => {
        console.log("Trocar senha pressionado");
    };

    const handleChangeDados = () => {
        console.log("Trocar senha pressionado");
    };

    const handleLogout = () => {
        router.replace('/login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.profileHeader}>
                <Image
                    source={{ uri: userProfileImageUrl }}
                    style={styles.profileImage}
                />
                <Text style={styles.userName}>{userName}</Text>
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
    }
});

export default ConfigScreen;


// app/(tabs)/index.tsx
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardText from '~/src/components/CardText';
import { FaCalendarAlt, FaCog, FaRoute } from 'react-icons/fa';
import MobileFooter from '../components/Footer';

const MainScreen: React.FC = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo ao</Text>
            <Text style={styles.appName}>Terê Verde</Text>
            <CardText
                title='Trilhas'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { router.replace('/trail') }}
                startIcon={<FaRoute size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />

            <CardText
                title='Eventos'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { router.replace('/event') }}
                startIcon={<FaCalendarAlt size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}

            />

            <CardText
                title='Configuração'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { router.replace('/config') }}
                startIcon={<FaCog size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />

            <MobileFooter />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 70,
        backgroundColor: '#F0F0F0',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingTop: 60,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        color: '#333',
        marginBottom: 5,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#3E7D47',
        marginBottom: 30,
    }
});

export default MainScreen;
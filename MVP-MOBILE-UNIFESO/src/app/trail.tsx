import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from 'react-native';
import CardText from '~/src/components/CardText';
import MobileFooter from '../components/Footer';
import { FaRoute } from 'react-icons/fa';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Trail = {
    id: number;
    nome: string;
    nivel: string;
    km: string;
    tempo: string;
    desc: string;
    documentId: string;
};

const TrailScreen: React.FC = () => {
    const router = useRouter()
    const [trails, setTrails] = useState<Trail[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchTrails() {
            try {
                const querySnapshot = await getDocs(collection(db, 'trilhas'));
                const fetchedTrails: Trail[] = querySnapshot.docs.map(doc => ({
                    ...(doc.data() as Trail), documentId: doc.id}))
                setTrails(fetchedTrails)
            } catch (error) {
                console.error('Erro ao buscar trilhas:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchTrails();
    }, []);

    const handlePressTrail = (trail: Trail) => {
        router.push({
            pathname: '/details',
            params: {
                type: 'trail',
                id: String(trail.id),
                nome: trail.nome,
                desc: trail.desc,
                nivel: trail.nivel,
                km: String(trail.km),
                tempo: String(trail.tempo),
                documentId: trail.documentId,
            },
        });
    };

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#3E7D47" />
                <Text>Carregando trilhas...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>Trilhas</Text>
                {trails.map((trail) => (
                    <CardText
                        key={trail.documentId}
                        title={trail.nome}
                        textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                        onPress={() => handlePressTrail(trail)}
                        startIcon={<FaRoute size={28} color="#333" />}
                        endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
                    />
                ))}
            </ScrollView>
            <MobileFooter />
        </View>
    );
};

export default TrailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    scrollViewContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3E7D47',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
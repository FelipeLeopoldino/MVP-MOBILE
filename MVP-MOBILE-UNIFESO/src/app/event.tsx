import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import MobileFooter from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';
import { FaCalendarAlt } from 'react-icons/fa';
import CardText from '../components/CardText';
import { useRouter } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';

type Event = {
    id: number;
    nome: string;
    tipo: string;
    local: string;
    duracao: string;
    desc: string;
    documentId: string;
};

const EventScreen: React.FC = () => {
    const router = useRouter()
    const [events, setEvent] = useState<Event[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchedEvent() {
            try {
                const querySnapshot = await getDocs(collection(db, 'eventos'));
                const fetchedEvent: Event[] = querySnapshot.docs.map(doc => ({
                    ...(doc.data() as Event), documentId: doc.id}))
                setEvent(fetchedEvent)
            } catch (error) {
                console.error('Erro ao buscar evonto:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchedEvent()
    }, []);

    const handlePressEvent = (event: Event) => {
        router.push({
            pathname: '/details',
            params: {
                type: 'event',
                id: String(event.id),
                nome: event.nome,
                tipo: event.tipo,
                local: event.local,
                ducacao: event.duracao,
                desc: event.desc,
                documentId: event.documentId,
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
                <Text style={styles.title}>Eventos</Text>
                {events.map((event) => (
                    <CardText
                        key={event.documentId}
                        title={event.nome}
                        textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                        onPress={() => handlePressEvent(event)}
                        startIcon={<FaCalendarAlt size={28} color="#333" />}
                        endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
                    />
                ))}
            </ScrollView>
            <MobileFooter />
        </View>
    );
};

export default EventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30

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
});
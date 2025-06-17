import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MobileFooter from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';
import { FaCalendarAlt } from 'react-icons/fa';
import CardText from '../components/CardText';
import eventData from '../data/event.json';
import { useRouter } from 'expo-router';

const EventScreen: React.FC = () => {
    const router = useRouter();

    const handlePressEvent = (event: typeof eventData.eventos[0]) => {
        router.push({
            pathname: "/details",
            params: { item: JSON.stringify(event), type: 'event' }
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>Eventos</Text>
                {eventData.eventos.map((event) => (
                    <CardText
                        key={event.id}
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
    }
});
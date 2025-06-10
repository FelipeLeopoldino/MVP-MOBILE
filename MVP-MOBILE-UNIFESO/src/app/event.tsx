import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MobileFooter from '../components/Footer';
import { Ionicons } from '@expo/vector-icons';
import { FaCalendarAlt } from 'react-icons/fa';
import CardText from '../components/CardText';

const EventScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Eventos</Text>
            <CardText
                title='Parque Nacional'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaCalendarAlt size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />

            <CardText
                title='Fauna e Flora'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaCalendarAlt size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}

            />

            <CardText
                title='Pedra do sino'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaCalendarAlt size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />
            <MobileFooter />

            <MobileFooter />
        </View>
    );
};

export default EventScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
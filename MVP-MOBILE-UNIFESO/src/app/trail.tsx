import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text } from 'react-native';
import CardText from '~/src/components/CardText';
import React from 'react';
import MobileFooter from '../components/Footer';
import { FaRoute } from 'react-icons/fa';

const TrailScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Trilhas</Text>
            <CardText
                title='Trilha do Mirante'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaRoute size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />

            <CardText
                title='Trilha da Pedra do Sino'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaRoute size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}

            />

            <CardText
                title='Trilha da Cascata do Imbuí'
                textStyle={{ color: '#000', fontSize: 18, fontWeight: '600' }}
                onPress={() => { }}
                startIcon={<FaRoute size={28} color="#333" />}
                endIcon={<Ionicons name="chevron-forward-outline" size={30} color="#333" />}
            />
            <MobileFooter />
        </View>
    );
};

export default TrailScreen;

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


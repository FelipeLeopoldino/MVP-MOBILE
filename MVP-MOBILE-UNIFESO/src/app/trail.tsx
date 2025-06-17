import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import CardText from '~/src/components/CardText';
import React from 'react';
import MobileFooter from '../components/Footer';
import { FaRoute } from 'react-icons/fa';
import trailData from '../data/trail.json';
import { useRouter } from 'expo-router';

const TrailScreen: React.FC = () => {
    const router = useRouter();

    const handlePressTrail = (trail: typeof trailData.trilhas[0]) => {
        router.push({
            pathname: "/details",
            params: { item: JSON.stringify(trail), type: 'trail' }
        });
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Text style={styles.title}>Trilhas</Text>
                {trailData.trilhas.map((trail) => (
                    <CardText
                        key={trail.id}
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

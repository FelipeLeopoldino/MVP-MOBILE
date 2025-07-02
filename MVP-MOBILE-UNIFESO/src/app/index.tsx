import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '~/src/components/Button';

const InitialScreen: React.FC = () => {

    const router = useRouter();

    const handleExplorePress = () => {
        router.replace('/login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Terê Verde</Text> 
            <Button
                title="Explorar"
                onPress={handleExplorePress}
                textStyle={{ color: '#3E7D47', fontSize: 18, fontWeight: '600' }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b5732',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginBottom: 50,
    }
});

export default InitialScreen;
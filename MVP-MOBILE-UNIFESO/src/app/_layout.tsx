import React from 'react';
import { Stack } from 'expo-router';
export default function RootLayout() {
    return (
        <Stack>
            <Stack.Screen name="login" options={{ headerShown: false }} />
            <Stack.Screen name="register" options={{ headerShown: false }} />

            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="main" options={{ headerShown: false }} />
            <Stack.Screen name="trail" options={{ headerShown: false }} />
            <Stack.Screen name="event" options={{ headerShown: false }} />
            <Stack.Screen name="config" options={{ headerShown: false }} />
        </Stack>
    );
}
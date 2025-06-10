import { router, usePathname } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, } from 'react-native';
import { FaHome, FaRoute, FaCalendarAlt, FaCog } from 'react-icons/fa';
import styles from './styles';

interface FooterIconProps {
    icon: React.ReactNode;
    label: string;
    onClick?: () => void;
    isActive: boolean
}

const FooterIcon: React.FC<FooterIconProps> = ({ icon, label, onClick, isActive }) => (
    <TouchableOpacity
        onPress={onClick}
        style={styles.footerIconButton}
        activeOpacity={0.7}
    >
        <View style={isActive ? styles.iconContainerActive : styles.iconContainer}>
            {icon}
        </View>
        <Text style={isActive ? styles.iconLabelActive : styles.iconLabel}>{label}</Text>
    </TouchableOpacity>
);

const MobileFooter: React.FC = () => {
    const pathname = usePathname();

    const isHomeActive = pathname === '/main';
    const isTrailsActive = pathname === '/trail';
    const isEventsActive = pathname === '/event';
    const isSettingsActive = pathname === '/config';

    const handleHomeClick = () => { router.replace('/main') };
    const handleTrailsClick = () => { router.replace('/trail') };
    const handleEventsClick = () => { router.replace('/event') };
    const handleSettingsClick = () => { router.replace('/config') };



    return (
        <View style={styles.footerContainer}>
            <FooterIcon
                icon={<FaHome size={24} color={isHomeActive ? '#3E7D47' : '#333'} />}
                label="Home"
                onClick={handleHomeClick}
                isActive={isHomeActive}
            />
            <FooterIcon
                icon={<FaRoute size={24} color={isTrailsActive ? '#3E7D47' : '#333'} />}
                label="Trilhas"
                onClick={handleTrailsClick}
                isActive={isTrailsActive}
            />
            <FooterIcon
                icon={<FaCalendarAlt size={24} color={isEventsActive ? '#3E7D47' : '#333'} />}
                label="Eventos"
                onClick={handleEventsClick}
                isActive={isEventsActive}
            />
            <FooterIcon
                icon={<FaCog size={24} color={isSettingsActive ? '#3E7D47' : '#333'} />}
                label="Configurações"
                onClick={handleSettingsClick}
                isActive={isSettingsActive}
            />
        </View>
    );
};

export default MobileFooter;
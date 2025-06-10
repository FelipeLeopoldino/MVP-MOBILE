import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    View,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { styles, internalStyles } from './styles';

interface CardTextProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    type?: 'primary' | 'outline' | 'text';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    loading?: boolean;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
}

const Cardtext: React.FC<CardTextProps> = ({
    title,
    onPress,
    style,
    textStyle,
    disabled = false,
    loading = false,
    startIcon,
    endIcon,
}) => {
    const CardTextStyles: ViewStyle[] = [styles.CardText];
    const CardTextTextStyles: TextStyle[] = [styles.CardTextText];

    if (style) {
        CardTextStyles.push(style);
    }
    if (textStyle) {
        CardTextTextStyles.push(textStyle);
    }

    return (
        <TouchableOpacity
            style={CardTextStyles}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            <View style={internalStyles.CardTextContent}>
                {startIcon && <View style={internalStyles.icon}>{startIcon}</View>}
                {loading ? (
                    <ActivityIndicator color={styles.CardTextText.color} />
                ) : (
                    <Text style={CardTextTextStyles}>{title}</Text>
                )}
                {endIcon && <View style={internalStyles.icon}>{endIcon}</View>}
            </View>
        </TouchableOpacity>
    );
};

export default Cardtext;
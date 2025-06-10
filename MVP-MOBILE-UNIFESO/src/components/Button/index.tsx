import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
    TextStyle,
} from 'react-native';
import styles from './styles';

interface ButtonProps {
    title: string;
    onPress: () => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    title,
    onPress,
    style,
    textStyle,
    disabled = false,
    loading = false,
}) => {
    const buttonStyles: ViewStyle[] = [styles.button];
    const buttonTextStyles: TextStyle[] = [styles.buttonText];

    if (disabled || loading) {
        buttonStyles.push(styles.disabled);
        buttonTextStyles.push(styles.disabledText);
    }

    if (style) {
        buttonStyles.push(style);
    }
    if (textStyle) {
        buttonTextStyles.push(textStyle);
    }

    return (
        <TouchableOpacity
            style={buttonStyles}
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.7}
        >
            {loading ? (
                <ActivityIndicator />
            ) : (
                <Text style={buttonTextStyles}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

export default Button;
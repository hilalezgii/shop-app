import React from "react";
import { ActivityIndicator, Text , TouchableOpacity } from "react-native";
import styles from "./Button.style";

const Button = ({text,onPress,loading}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {loading ? (
            <ActivityIndicator color="white"/>
            ) : (
            <Text style={styles.title} > {text} </Text>
            )}
        </TouchableOpacity>
    );
};
export default Button; 
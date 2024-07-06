import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Icon from '@expo/vector-icons/Entypo';

import styles from "./Input.style";

const Input = ({ placeholder, value, onType ,iconName ,isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            placeholder={placeholder} 
            onChangeText={onType} 
            value={value} 
            secureTextEntry={isSecure}
            />
            <Icon name={iconName} size={25} color="gray" />
        </View>

    )
}
export default Input;
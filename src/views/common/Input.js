import React from 'react';
import { TextInput, Text, View } from 'react-native';


const Input = ({ 
        label, value, onChangeText, autoCorrect = false, 
        autoCapitalize = 'none', placeholder, secureTextEntry
    }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput 
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                style={inputStyle}
                value={value}
                autoCorrect={autoCorrect}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
            />
        </View>

    );
};

const styles = {
    inputStyle: {
        height: 20,
        width: 100,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1
    }
};
export { Input };

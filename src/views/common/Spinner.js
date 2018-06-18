import React from 'react';
import { 
    StyleSheet,
    ActivityIndicator,
    View
} from 'react-native';

const Spinner = ({ size = 'large' }) => (
    <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size} />
    </View>
);

const styles = StyleSheet.create({
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
export { Spinner };

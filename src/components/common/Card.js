import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    const {containerStyle} = styles;
    return (
        <View style={containerStyle}>            
            {props.children}
        </View>
    );
}

export {Card};

const styles = {
    containerStyle:{
        borderBottomWidth: 0,
        borderColor: '#FFFFFF',
        elevation : 1,
        marginTop: 10
    }
}
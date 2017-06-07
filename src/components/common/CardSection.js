import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const {containerStyle} = styles;
    return (
        <View style={containerStyle}>            
            {props.children}
        </View>
    );
}

export {CardSection};

const styles = {
    containerStyle:{
        borderBottomWidth: 0,
        borderTopWidth: 0,        
        padding: 20,
        backgroundColor: '#ffff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ffff',
        // position: 'absolute'
    }
}
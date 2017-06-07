import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

class SubHeader extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={ styles.container }>
                <View style={ styles.headerBody }>
                    <View style={ styles.leftButtonContent }>
                        <Button 
                            onPress={ ()=>{props.toggleMenu()} }
                            backgroundColor='transparent'
                            buttonStyle={ {marginTop : 15} }
                        />
                    </View>
                    <View style={ styles.headerTitleContent }>
                        <Text style={ styles.headerTitle }>{this.props.titulo}</Text>
                    </View>
                    <View style={ styles.rightButtonContent }>

                    </View>
                </View>
            </View>
        )
    }

}

export {SubHeader};

 const styles = StyleSheet.create({
    container:{
        height : 60,
        backgroundColor : '#03a9f4'
    },
    headerTitleContent : {
        flex : 3,
        height : 60,
        justifyContent : 'center',
        alignItems : 'center',
        //backgroundColor : 'green'
    },
    headerTitle : {
        color : '#fff',
        marginTop : 15
    },
    headerBody : {
        flexDirection : 'row'
    },
    leftButtonContent : {
        //flex : 1
    },
    leftButton : {
        //marginTop : 10
    },
    rightButtonContent : {
        flex : 1
    },
    rightButton : {

    }
})
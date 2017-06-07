import React, { Component } from 'react';
import { View, Modal, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

class ModalDefault extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
        <View>
            <Modal
                onRequestClose={() => {} }
                animationType={"fade"}
                transparent={true}
                visible={this.props.show}
                >
                <View  style={styles.containerModal}>
                    <View>
                        <View style={ styles.containerElementos }>
                            {this.props.children}
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
        )
    }
}

export {ModalDefault};

const styles = StyleSheet.create({
    containerModal :{
        marginTop : height/3,
        alignItems : 'center',
        justifyContent : 'center',
        alignSelf : 'center',
        backgroundColor : '#fff',
        borderWidth : 1,
        borderColor : 'rgba(0,0,0, 0.2)',
        borderRadius : 5,
        zIndex : 2,
        elevation : 10,
        shadowOffset:{
            width: 0,
            height: 0,
        },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowRadius : 10
    },
    containerElementos : {
        width : width /2+100,
        height : height /3+50
    },
    header : {
        flexDirection : 'row',
        height : 60,
        padding : 10,
        justifyContent : 'center',
        alignItems : 'center',
    },
    title:{ 
        textAlign : 'center',
    },
    buttonContinuar: {
        width: 200,
        height: 30
    },
    buttonCancelar: {
        width: 200,
        height: 30,
        marginTop: 15
    },
    viewButtons: {
        paddingTop : 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
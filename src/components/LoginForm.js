import React, {Component} from 'react';
import {TextInput, View, StyleSheet, Text} from 'react-native';
import {Card, CardSection, Spinner} from './common';
import {Button} from 'react-native-elements';
import firebase from 'firebase';

class LoginForm extends Component{

    state = {email: '', password:'', error:'', loading: false};

    logIn(){
        const {email, password} = this.state;

        this.setState({error: '', loading: true});
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(this.onLoginSuccess.bind(this))
        .catch(()=>{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFail.bind(this));
        });
    }

    onLoginFail(){
    
        this.setState({error:'Autenticação falhou !!!', loading: false});
    }

    onLoginSuccess(){
        console.log('onLoginSuccess');
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: ''
        });
    }

    renderButton(){
        if(this.state.loading === true){
            return <Spinner size="small"/>
        }
        return (
            <Button 
                title='Login'
                onPress={()=>this.logIn()}
                buttonStyle={ {marginTop : 15, height: 30, width:300, backgroundColor: '#42c2f4'} }
            />
        )
    }

    render() { 
        return (
            <View>
                <Card>
                    <CardSection>
                        <View style={{ flex:1, paddingLeft:15}}>
                            <TextInput 
                                autoCorrect= {false}
                                placeholder='E-mail'
                                value={this.state.email}
                                onChangeText = {email => this.setState({email:email})}    
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
                            />      
                        </View>                  
                    </CardSection>
                    <CardSection>
                        <View style={{ flex:1, paddingLeft:15}}>
                            <TextInput 
                                secureTextEntry={true}
                                autoCorrect= {false}
                                placeholder='E-mail'
                                value={this.state.password}
                                onChangeText = {password => this.setState({password:password})}    
                                style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200}}
                            />      
                        </View>                  
                    </CardSection>

                    <Text style={styles.errorTextSyle}>
                        {this.state.error}
                    </Text>

                    <CardSection>
                        <View style={{flex:1}}>
                            {this.renderButton()}
                        </View>
                    </CardSection>            
                </Card>
            </View>
        );
    }
}

export default LoginForm;

const styles = StyleSheet.create({
    input : {
        marginBottom : 10
    },
    errorTextSyle:{
        fontSize: 20,
        alignSelf: 'center',
        color:'red'
    }
});

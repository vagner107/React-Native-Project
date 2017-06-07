import React, {Component} from 'react';
import {View, Text} from 'react-native';
import firebase from 'firebase';
import {SubHeader} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
    
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyA-iUgNZkJ1_RO7AUCOSHtHO-_IEVAXt70",
            authDomain: "authentication-7a890.firebaseapp.com",
            databaseURL: "https://authentication-7a890.firebaseio.com",
            projectId: "authentication-7a890",
            storageBucket: "authentication-7a890.appspot.com",
            messagingSenderId: "158052727321"
        });
    }

    render(){
        return(
            <View>
                <View>
                    <SubHeader titulo={'Autenticação'}/>
                </View>
                <View>
                    <LoginForm/>
                </View>
            </View>
        )
    }
}

export default App;

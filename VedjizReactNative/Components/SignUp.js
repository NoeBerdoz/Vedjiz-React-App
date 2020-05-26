import React from 'react';
import {StyleSheet, View, Button, TextInput, Text} from 'react-native';

import deviceStorage from '../API/deviceStorage';
import axios from 'react-native-axios';


class SignUp extends React.Component {

    constructor(props) {
        super(props);

        this.signUpUser = this.signUpUser.bind(this);
    }

    _signUpUser() {
        const {firstname, lastname, phonenumber} = this.state;
        this.setState({error: '', loading: true});

        axios.post('192.168.43.218:8000/api/user/apply', {

                firstname: firstname,
                lastname: lastname,
                phonenumber: phonenumber,

        })
            .then((response) => {
                deviceStorage.saveItem("api_token", response.data);
            })
            .catch((error) => {

            });
    }

    render() {
        return (
            <View style={styles.main_container}>
                <Text style={styles.title_text}>Inscription à Vedjiz</Text>
                <TextInput style={styles.input_text} placeholder="Prénom"/>
                <TextInput style={styles.input_text} placeholder="Nom"/>
                <TextInput style={styles.input_text} placeholder="Téléphone"/>
                <Button title='Inscription' onPress={() => this._signUpUser()}/>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        marginTop: 20,
    },

    title_text: {

        fontSize: 20,
        color: 'gray',
        marginBottom: 10,
    },

    input_text: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        backgroundColor: '#E8E8E8',
        marginBottom: 10,
    },
});

export default SignUp;

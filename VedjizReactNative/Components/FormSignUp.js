import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Market from "./Market";

export const SignUpForm = props => (

    <View>
        <Formik
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <TextInput // handleSubmit = onSubmit, handle Change & Blur serve to get the element in backend
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <Button onPress={handleSubmit} title="Submit"/>

                </View>
            )}
        </Formik>
        <Button title="Accéder au marché"/>
    </View>
    
);


export default SignUpForm;


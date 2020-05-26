import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';

export const SignUpForm = props => (
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
);


export default SignUpForm;


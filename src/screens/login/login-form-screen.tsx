import { ErrorMessage, Formik } from 'formik';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Input, Text, View, YStack } from 'tamagui';

export function LoginFormScreen() {
  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        jc='space-between'
        f={1}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
              errors.email = 'Invalid email address';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            setSubmitting(false);
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            isSubmitting,
            errors,
            touched
          }) => (
            <View>
              <Text>User</Text>
              <Input
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && <Text>{errors.email}</Text>}

              <Text>Password</Text>
              <Input
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Button
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                Submit
              </Button>
            </View>
          )}
        </Formik>
      </YStack>
    </View>
  );
}

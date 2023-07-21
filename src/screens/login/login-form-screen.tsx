import { SubmitButton } from '@components/buttons/submit-button';
import { InputCustom } from '@components/input/input-custom';
import { InputError } from '@components/input/input-error';
import { EMAIL_REGEX } from '@constants/regex';
import { Formik } from 'formik';
import React, { useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { Button, Input, Spinner, Text, View, YStack } from 'tamagui';

export function LoginFormScreen() {
  return (
    <View
      bg='$background'
      f={1}
    >
      <YStack
        mx={'$4'}
        f={1}
      >
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Required';
            } else if (!EMAIL_REGEX.test(values.email)) {
              errors.email = 'Invalid email address';
            }

            if (!values.password) {
              errors.password = 'Required';
            } else if (values.password.length < 8) {
              errors.password = 'Password must be at least 8 characters';
            } else if (values.password.length > 20) {
              errors.password = 'Password must be less than 20 characters';
            } else if (!/[a-z]/.test(values.password)) {
              errors.password = 'Password must contain at least one lowercase letter';
            } else if (!/[A-Z]/.test(values.password)) {
              errors.password = 'Password must contain at least one uppercase letter';
            } else if (!/[0-9]/.test(values.password)) {
              errors.password = 'Password must contain at least one number';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 1500);
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
            <View
              gap={24}
              f={1}
              jc={'center'}
            >
              <View gap={8}>
                <InputCustom
                  label={'Email'}
                  placeholder={'Email'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                />
                {errors.email && touched.email && <InputError error={errors.email} />}
              </View>

              <View gap={8}>
                <InputCustom
                  label={'Password'}
                  placeholder={'Password'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <InputError error={errors.password} />
                )}
              </View>

              {!isSubmitting && (
                <SubmitButton
                  onPress={handleSubmit}
                  disabled={isSubmitting}
                  text='Submit'
                />
              )}
              {isSubmitting && (
                <Spinner
                  mt={32}
                  color={'$black'}
                  size='large'
                />
              )}
            </View>
          )}
        </Formik>
      </YStack>
    </View>
  );
}

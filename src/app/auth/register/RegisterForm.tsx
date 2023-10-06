'use client'
import React from 'react'
import { useRegistration } from '@/hooks'
import { Form, InputField, SubmitButton,SelectField,PhoneField } from '@/app/components'

function RegisterForm() {
    const { onSubmit, intialValues, isLoading,validationSchema,genderOptions } = useRegistration();
  return (
   <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
     <InputField name="first_name" label="First Name" type="text" required />
            <InputField name="last_name" label="Last Name" type="text" required />
            <PhoneField name="phone_number" label="Phone Number" />
            <PhoneField name="alternative_contact" label="Alternative Contact" />
            <SelectField name="gender" options={genderOptions} label="Gender" />
            <InputField name="username" label="Username" type="text" required />
            <InputField name="email" label="Email Address" type="email" required />
            <InputField name="password" label="Password" type="password" required />
            <InputField name="re_password" label="Confirm Password" type="password" required />
            <SubmitButton isLoading={isLoading} title="Sign up" />
    </Form>
  )
}

export default RegisterForm

'use client'
import React from 'react'
import { useRegistration } from '@/hooks'
import { Form, InputField, SubmitButton,SelectField,PhoneField } from '@/app/components'

function RegisterForm() {
    const { onSubmit, intialValues, isLoading,validationSchema,genderOptions } = useRegistration();
  return (
   <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
    <div className="sm:col-span-3">
    <InputField name="first_name" label="First Name" type="text" required />
             
            </div>

            <div className="sm:col-span-3">
            <InputField name="last_name" label="Last Name" type="text" required />
            </div>

            <div className="sm:col-span-3">
            <PhoneField name="phone_number" label="Phone Number" />
            </div>
            <div className="sm:col-span-3">
            <PhoneField name="alternative_contact" label="Alternative Contact" />
            </div>

            <div className="sm:col-span-6">
            <SelectField name="gender" options={genderOptions} label="Gender" />
            </div>


            <div className="sm:col-span-3">
            <InputField name="username" label="Username" type="text" required />
            </div>
            <div className="sm:col-span-3">
            <InputField name="email" label="Email Address" type="email" required />
            </div>
            <div className="sm:col-span-3">
            <InputField name="password" label="Password" type="password" required />
            </div>
            <div className="sm:col-span-3">
            <InputField name="re_password" label="Confirm Password" type="password" required />
            </div>


    </div>
           
            
            
           
           
            
           
           
            <SubmitButton isLoading={isLoading} title="Sign up" />
    </Form>
  )
}

export default RegisterForm

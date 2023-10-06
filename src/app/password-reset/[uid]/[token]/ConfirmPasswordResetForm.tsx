"use client"
import React from 'react'
import { Form, InputField, SubmitButton } from '@/app/components'
import { usePasswordResetConfirm } from '@/hooks'

interface Props {
    uid:string;
    token:string;
}

function ConfirmPasswordResetForm({uid,token}: Props) {
    const { onSubmit, intialValues, isLoading,validationSchema } = usePasswordResetConfirm(uid,token);
  return (
    <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <InputField
      name="new_password"
      label="New Password"
      type="password"
      Id="id_new_password"
      required
    />
    <InputField
      name="re_new_password"
      label="Confirm New Password"
      type="password"
      Id="id_re_new_password"
      required
    />
 
    <SubmitButton isLoading={isLoading} title="Request Password Reset" />
  </Form>
  )
}

export default ConfirmPasswordResetForm

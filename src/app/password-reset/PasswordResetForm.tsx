"use client"
import { Form, InputField, SubmitButton } from '@/components';
import { usePasswordReset } from '@/hooks';

function PasswordResetForm() {
    const { onSubmit, intialValues, isLoading,validationSchema } = usePasswordReset();
  return (
    <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <InputField
      name="email"
      label="Email"
      type="email"
      Id="id_email"
      required
    />
 
    <SubmitButton isLoading={isLoading} title="Request Password Reset" />
  </Form>
  )
}

export default PasswordResetForm

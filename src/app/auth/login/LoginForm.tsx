"use client";
import { Form, InputField, SubmitButton } from '@/components';
import useLogin from '@/hooks/use-login';

function LoginForm() {
  const { onSubmit, intialValues, isLoading,validationSchema } = useLogin();

  return (
    <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    <InputField
      name="username"
      label="Username"
      type="text"
      Id="id_username"
      required
    />
    <InputField
      name="password"
      link={{
        linkText: "Forgot Password?",
        linkUrl: "/password-reset",
      }}
      label="Password"
      type="password"
      required
    />
    <SubmitButton isLoading={isLoading} title="Login" />
  </Form>
  )
}

export default LoginForm

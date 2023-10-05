"use client";
import React from "react";

import { Formik, Form } from "formik";
import Link from "next/link";
import Image from "next/image";
import { InputField, SubmitButton,H2Text } from "@/app/components";
import useLogin from "./login";

function page() {
  const { onSubmit, intialValues, isLoading,validationSchema } = useLogin();

  return (
    <main>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            src="/logo_2.png"
            width={100}
            height={100}
            alt="Farmers Application - Products"
            className="rounded-lg  mx-auto h-20 w-auto"
          />
          <H2Text text="Login into your account"/>
         
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
            <Form className="space-y-6">
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
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="font-semibold leading-6 text-green-600 hover:text-green-500"
            >
              Register here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;

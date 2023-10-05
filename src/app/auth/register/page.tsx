'use client'
import React, { FormEvent } from "react";
import Image from "next/image";
import {useRouter} from "next/navigation"
import { Formik,Form  } from "formik";
import Link from "next/link";
import {toast} from "react-toastify"
import {InputField,SelectField,PhoneField,SubmitButton} from "@/app/components"
import { User } from "../../../../type";
import { useRegisterMutation } from "@/redux/features/authApiSlice";



function page() {

  const [register, {isLoading}] = useRegisterMutation()
  const router = useRouter()

  const intialValues = {
    email:'',
    first_name: '',
    last_name: '',
    phone_number: '',
    alternative_contact: '',
    gender:1,
    username: '',
    password: '',
   re_password: ''
  }
  const genderOptions = [
        {id: 1, name:'Male'},
        {id: 2, name:'Female'},
  ]


  const onSubmit = (values: User) => {
   // event.preventDefault();

    register(values).unwrap().then((res) => {
      console.log(res);
      toast.success("Account created successfully, please check email to verify account")
      router.push("/auth/login")
    }
    ).catch((err) => {
      console.log(err);
      toast.error("Error creating account, please try again")
    })
   
  }

  

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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         
          <Formik
            initialValues={intialValues}
            onSubmit={onSubmit}
            >
        <Form className="space-y-6">
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
          </Formik>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have an account?{" "}
            
            <Link
              href="/auth/login"
              className="font-semibold leading-6 text-green-600 hover:text-green-500"
            >
             Login here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default page;

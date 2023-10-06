//app form using formik 
"use client";
import { Formik, Form } from "formik";
import React from 'react'

interface Props{
  initialValues: any;
  validationSchema: any;
  onSubmit: any;
  children: React.ReactNode;
}

function AppForm( {initialValues, validationSchema, onSubmit,children}: Props) {


  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} >
    <Form className="space-y-6">
      {children}

    </Form>
  </Formik>
  )
}

export default AppForm

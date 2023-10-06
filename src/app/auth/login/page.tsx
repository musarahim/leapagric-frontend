
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { H2Text } from "@/app/components";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Farm Wise | Login",
  description: "Login to your account",
};

function page() {
  

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
      
         
         <LoginForm/>

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

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import RegisterForm from "./RegisterForm";
import { SocialButtons } from "@/app/components";

export const metadata: Metadata = {
  title: "Farm Wise | Register",
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
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up for an account
          </h2>
        </div>

        <div className="mt-10 w-1/2  mx-auto">
         
          <RegisterForm />
          <SocialButtons/>

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

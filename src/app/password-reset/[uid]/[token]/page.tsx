import { H2Text } from "@/components";
import { Metadata } from "next";
import Image from "next/image";
import ConfirmPasswordResetForm from "./ConfirmPasswordResetForm";

export const metadata:Metadata = {
  title: "Farm Wise | Reset Password Confirm",
  description: "Farm Wise confirm  password reset page",
};

interface Props {
  params: {
    uid:string;
    token:string;
  }
}

function page({params: {uid,token}}: Props) {
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
        <H2Text text="Reset your password"/>
       
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    
       
       <ConfirmPasswordResetForm uid={uid} token={token}  />

      </div>
    </div>
    </main>
  )
}

export default page

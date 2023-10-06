
import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import { useResetPasswordConfirmMutation } from "@/redux/features/authApiSlice";
import * as Yup from 'yup';

type UserPassword = {
    new_password: string,
    re_new_password: string,

}

function UsePasswordResetConfirm(uid:string, token:string) {
    const [resetPasswordConfirm, {isLoading}] = useResetPasswordConfirmMutation()
    const router = useRouter()
    
    const intialValues = {
      new_password: '',
      re_new_password: '',
     
    }
    const validationSchema = Yup.object({
        new_password: Yup.string().required('Password is required'),
        re_new_password: Yup.string().required('Confirm password is required').oneOf([Yup.ref('new_password')], 'Passwords must match')
    })
  
  
    const onSubmit = ({new_password, re_new_password}: UserPassword) => {
     // event.preventDefault();
     console.log(uid, token, new_password, re_new_password);
     resetPasswordConfirm({uid,token,new_password,re_new_password}).unwrap().then((res) => {
       
        toast.success("Password reset successfully")
        router.push("/auth/login")
      }
      ).catch((err) => {
        toast.error("Paaaword reset failed")
      })
     
    }
  
    
  return{
    uid,
    token,
    onSubmit,
    intialValues,
    isLoading,
    validationSchema
  }
}

export default UsePasswordResetConfirm

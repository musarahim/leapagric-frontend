
import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import { LoginUser } from "../../type";
import { useLoginMutation } from "@/redux/features/authApiSlice";
import { setAuth } from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import * as Yup from 'yup';

function Uselogin() {
    const [login, {isLoading}] = useLoginMutation()
    const router = useRouter()
    const dispatch = useAppDispatch()
    
    const intialValues = {
      username: '',
      password: '',
    
    }
    const validationSchema = Yup.object({
      username: Yup.string().required('Username is required'),
      password: Yup.string().required('Password is required'),
    })
  
  
    const onSubmit = (values: LoginUser) => {
     // event.preventDefault();
  
      login(values).unwrap().then((res) => {
        dispatch(setAuth())
        router.push("/dashboard")
        toast.success("Login successfully")
        
      }
      ).catch((err) => {
        toast.error(err.data.detail)
      })
     
    }
  
    
  return{
    onSubmit,
    intialValues,
    isLoading,
    validationSchema
  }
}

export default Uselogin

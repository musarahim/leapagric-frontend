import { useRegisterMutation } from "@/redux/features/authApiSlice"
import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import * as Yup from 'yup';
import { User } from "../../type"

function useRegistration() {
const [register, {isLoading}] = useRegisterMutation()
  const router = useRouter()

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    first_name: Yup.string().required('First name is required'),
    last_name: Yup.string().required('Last name is required'),
    phone_number: Yup.string().required('Phone number is required'),
    alternative_contact: Yup.string().required('Alternative contact is required'),
    gender: Yup.object().required().nullable().label("Gender is required"),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
   re_password: Yup.string().required('Confirm password is required').oneOf([Yup.ref('password')], 'Passwords must match')
  })


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
 
  return { genderOptions, onSubmit, intialValues,validationSchema, isLoading } ;
}

export default useRegistration
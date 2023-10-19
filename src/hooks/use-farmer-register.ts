import { useFarmerRegisterMutation, useGetEducationLevelQuery, useGetFarmerGroupQuery } from "@/redux/features/farmerApiSlice"
import {useRouter} from "next/navigation"
import {toast} from "react-toastify"
import * as Yup from 'yup';
import { Farmer } from "../../type"
import { useGetDistrictsQuery } from "@/redux/features/commonApiSlice";

function useFarmerRegistration() {
const [farmeRegister, {isLoading}] = useFarmerRegisterMutation();
const { data: educationLevel } = useGetEducationLevelQuery();
const { data: farmerGroup } = useGetFarmerGroupQuery();
const {data:districts} = useGetDistrictsQuery()
  const router = useRouter()

  const validationSchema = Yup.object({
    date_of_birth: Yup.date().required('Date of birth is required'),
    level_of_education: Yup.string().required('Level of Education is required'),
    occupation: Yup.string().required('Occupation is required'),
    experience: Yup.number().required('Experience is required'),
    farmer_group: Yup.array().nullable(),
    general_remarks: Yup.string().nullable(),
    production_scale: Yup.string().required('Production Scale is required'),
   

  })


  const intialValues = {
    date_of_birth:'',
    level_of_education:'',
    occupation:'',
    experience:'',
    farmer_group:[],
    general_remarks:'',
    production_scale:'',
  }
 


  const onSubmit = (values: Farmer) => {
   // event.preventDefault();

   farmeRegister(values).unwrap().then((res) => {
  
      router.push("/farmer")
      toast.success("Farmer Account created successfully, please go ahead and add your farm/s")
     
    }
    ).catch((err) => {
      console.log(err);
      toast.error("Error creating account, please try again")
    })
   
  }
 
  return { educationLevel,farmerGroup,districts, onSubmit, intialValues,validationSchema, isLoading } ;
}

export default useFarmerRegistration
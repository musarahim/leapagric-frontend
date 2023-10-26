"use client"
import React from 'react'
import { Form, InputField, SubmitButton, SelectField, TextAreaField,MultiSelect } from '@/app/components'
import {useFarmerRegistration} from '@/hooks'
import { FarmerGroup } from '../../../../types'

const productionScale =[
  {id:'Subsistence Production', name:'Subsistence Production'},
  {id:'Small Commercial Production', name:'Small Commercial Production'},
  {id:'Large Commercial Production', name:'Large Commercial Production'}
]


function RegisterFarmerForm() {
  const { onSubmit, intialValues, isLoading,validationSchema, educationLevel,farmerGroup,districts } = useFarmerRegistration();
  const farmerGroups = farmerGroup?.map((group:FarmerGroup) => {
    return {value:group.id, label:group.name}
  })
  return (
    <Form initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
         <div className="space-y-12">
       
       <div className="border-b border-gray-900/10 pb-12">
       
         <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
           <div className="sm:col-span-3">
           <InputField name="date_of_birth" label="Date of Birth" type="date" required />
           </div>

           <div className="sm:col-span-3">
           <SelectField name="level_of_education" options={educationLevel} label="Level of Education" />
           </div>

           <div className="sm:col-span-3">
             <InputField name="occupation" label="Occupation" type="text" required />
           </div>

           <div className="sm:col-span-3">
              <InputField name="experience" label="Years of Experience" type="number" required />
           </div>

          
           <div className="sm:col-span-2 sm:col-start-1">
         
            <MultiSelect name='farmer_group' label='Farmer Group' options={farmerGroups} isMulti={true}/>
           </div>

           <div className="sm:col-span-2">
             <SelectField name='production_scale' label='Production Scale' options={productionScale} />
           </div>

           <div className="sm:col-span-2">
           <SelectField name='district' label='District' options={districts}/>
           </div>
           <div className="col-span-full">
           <TextAreaField name='general_remarks' label='General Remarks' rows={4} />
           </div>

         </div>
       </div>

     </div>

     <div className="mt-6 flex items-center justify-end gap-x-6">
       <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
         Cancel
       </button>
     
      <SubmitButton  isLoading={isLoading} title="Save" />
     </div>

    </Form>
      
    
  )
}

export default RegisterFarmerForm

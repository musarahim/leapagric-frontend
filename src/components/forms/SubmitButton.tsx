import React from 'react'
import { Spinner } from '../index'

interface Props {
    isLoading: boolean,
    title : string
    }

function SubmitButton({...props }: Props) {
  return (
    <div>
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
      disabled={props.isLoading}
    > 
      {props.isLoading ? <Spinner sm /> : props.title}
    </button>
  </div>
  )
}

export default SubmitButton

import React from 'react'
import { useForm } from "react-hook-form";


function DataModal(props) {
    const {Onsubmit}=props;


    const { register, handleSubmit, watch, formState: { errors } } = useForm();



  return (
    <div className='bg-white h-full w-full fixed bg-opacity-65 flex justify-center items-center '>
      <form 
      onClick={handleSubmit (Onsubmit)}
      className='h-fit w-[350px] border-2 bg-white p-4 flex flex-col gap-4'>
        <div className='flex justify-between'>
        <p className='text-xl'>Basic Model</p>
        <p>X</p>
        </div>
        <div className='flex justify-between '>
            <p>Name</p>
            <input className='border-2 ' type="text" {...register("Name")}/>
        </div>
        <div className='flex justify-between  '>
            <p>Email</p>
            <input className='border-2 ' type="email" {...register("Email")}/>
        </div>
        <div className='flex justify-between  '>
            <p>Phone</p>
            <input className='border-2 ' type="phone" {...register("Phone")}/>
        </div>
        <div className='flex justify-between  '>
            <p>Website</p>
            <input className='border-2 ' type="url" {...register("Website")}/>
        </div>
        <div className='flex justify-between  '>
            <p>ImageUrl</p>
            <input className='border-2 ' type="url" {...register("ImageUrl")}/>
        </div>
        <button className='bg-blue-500 rounded-lg p-4 text-xl font-bold' type='submit'>Submit</button>
        
      </form>

    </div>
  )
}

export default DataModal

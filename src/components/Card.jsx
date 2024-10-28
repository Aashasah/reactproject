import React, { useState } from 'react'
import { FaHeart, FaRegEnvelope } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { BiSolidPencil } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { VscHeartFilled } from "react-icons/vsc";
import { RiDeleteBinLine } from "react-icons/ri";
import { FcLike } from "react-icons/fc";

const Card=(value) =>{
    const{email,  imgurl, name, phone, url}=value.value
   
      const [Isred, setIsred]=useState(false);
      const handledred=()=>{
        setIsred (!Isred);
        // if (isred===true){
        //     setisred(false)
        // }
        // else if (isred===false){
        //     setisred(true)
        // }
           
           

      }
    
    return (
        <div className='border-2 w-[300px] h-fit border-black '>

            <div className='flex bg-slate-200 justify-center p-10'>
                <img className='h-1/2 w-[50%]' src={imgurl} alt="" />
            </div>
            <div className='px-3'>
            <p className='text-2xl '>{name}</p>
            <div className='flex gap-2 items-center'>


                <FaRegEnvelope />
                <p className=''>{email}</p>
            </div>
            <div className='flex gap-2 items-center'>


            <IoCall />
                <p>{phone}</p>
            </div>
            <div className='flex gap-2 items-center'>


                <IoIosAddCircle />
                <p>{url}</p>
            </div>
            </div>
<div className='justify-between flex bg-slate-300'>

    <div
    onClick={handledred} 
    className='border-r-2 p-4 w-1/3 flex justify-center cursor-pointer'>
        {Isred ? <FaHeart /> : <FcLike />}
        
        
        </div>

    <div className='border-r-2 p-4 w-1/3 flex justify-center cursor-pointer '><BiSolidPencil /></div>
    <div className='border-r-2 p-4 w-1/3 flex justify-center cursor-pointer'><RiDeleteBinLine /></div>
</div>
        </div>


    )
}

export default Card;

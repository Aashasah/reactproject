import React from 'react'
import Card from './Card'
import { Data } from '../../../Data'
import DataModal from './DataModal'

function Body() {
  const Onsubmit=(Data)=>{
    console.log(Data)
  };
  return (
    <div className='flex gap-2 flex-wrap'>
<DataModal Onsubmit={Onsubmit}/>


        {
            Data.map((val)=>(
                <Card value= {val} />
            ))
        }
     
    </div>
  )
}

export default Body

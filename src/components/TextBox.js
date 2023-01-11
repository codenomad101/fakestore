import React from 'react'

const TextBox = ({label,inputProps,onChange,value}) => {
  return (
    <div className=" flex flex-col p-1 m-2 m-5 h-15 w-80">
      <label>
        {label}
      </label>
      <br />
      <input className='bg-gray-300 p-2 outline-none h-8' value ={value} type ="text" onChange={onChange} >
      
      </input>
    </div>
     
    
  )
}

export default TextBox;

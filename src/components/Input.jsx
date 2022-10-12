import React from 'react'

export default function Input({label,type,name, data, handle}) {
  return (
    <>
      <label>{label}</label><br></br>
      <input style={{borderColor:"green"}} onChange={(event)=>{handle(event)}}name={name} value={data.name} data={data} className={label.split(" ")[0]}type={type}></input><br></br>
    </>
  )
}

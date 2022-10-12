import React,{useState} from 'react'
import Input from './input'

export default function Right() {
  const [data,setData] = useState({
    firstname: "",
    lastname: "",
    email:"",
    password:"",
    confirm:"",
    phonenumber:""
  });
  function update(event){
    const {name,value} = event.target
    setData(oldvalue=>{
      return {
        ...oldvalue,
        [name] : value
      }
    })
    
  }
  return (
    <article className='right'>
      <div>
        <p className='pfisrt'>This is not real online service!You know you need something 
        like this in your life to help you realixe your deppest dream. sign up now to get started.</p>
        <p>you know you want to</p>
      </div>
      <div>
        <h2>Let's do this!</h2>
        <div className="input-form">
        <div>
          <Input name="firstname" handle={update} data={data} label="FIRST NAME" type="text"/>
          <Input name="email" data={data} label= "EMAIL" type="email" />
          <Input  name="password" handle={update} data={data} label="PASSWORD" type="password"/>
          <p>*password does not match</p>
        </div>
        <div>
        <Input name="lastname" data={data} label="LAST NAME" type="text"/>
        <Input name="phonenumber" data={data} label="PHONE NUMBER" type="text"/>
        <Input name="confirm" handle={update} data={data} label="CONFIRM PASSWORD" type="password"/>
        </div>
        </div>
      </div>
      <div>
        <button>Create Account</button>
      </div>
    </article>
  )
}

import React,{useState} from 'react'
import "./Signup.css"

export default function Signup() {
const [values, setValues]=useState({
  name:"",
  email:"",
  password:"",
})

const handleChange=(event)=>{
  setValues({
    ...values,
    [event.target.name]:event.target.value,
  })
}

const handleSubmit=(event)=>{
  event.preventDefault(); 
}

  return (
    
    <div className='container'>
      <div className='app-wrapper'>
        <div>
          <h1 className='title'> Create Account</h1>

        </div>
        <div className='form-wrapper'>
          <div className='name'>
          <label className='label'>name</label>
          <input className='input' type="text" value={values.name}
           onChange={handleChange}
          />
          </div>

          <div className='email'>
          <label className='label'>E-mail</label>
          <input className='input' type="email" value={values.email}
           onChange={handleChange}
          />
          </div>

          <div className='password'>
          <label className='label'>password</label> 
          <input className='input' type="password"  value={values.password}
           onChange={handleChange}  
          />
          </div>


          <div>
            <button className='submit'onClick={handleSubmit} > sign-up</button>
          </div>
        </div>
        
      </div>
       
    </div>
  )
}

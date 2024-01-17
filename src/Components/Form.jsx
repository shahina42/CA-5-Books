import {useForm} from 'react-hook-form'
import {useState} from 'react'
import '../App.css'
import { Link } from 'react-router-dom';

function Form() {

const{register,handleSubmit, watch,formState:{errors}}=useForm();
const[submitted,setsubmitted]=useState(false);

const onSubmit=data=>{
  if(!watch('checkbox')){
    // console.log("not checked")
    return;
  }
  console.log(data);
setsubmitted(true);
}

const goHome=()=>{
  console.log("home btn clicked")
}

const checking=watch('password');


  return (
   <div className='formPage'>
   <form onSubmit={handleSubmit(onSubmit)}>
    <h2>CREATE ACCOUNT</h2>

    {submitted && !Object.keys(errors).length ?(<div className="done"><h3>Account created successfully</h3>
    <Link to="/"><button className='goHome' onClick={goHome}> Go Home</button></Link>
    </div>):(<>
    

 <input {...register('Name',{
  required:'This Field is required',
  minLength:{value:3,message:'Minimum 3 characters are required'},
  maxLength:{value:30,message:'Maximum 30 characters only'}
 })} className="Name" type="text" placeholder='Your Name'/> <br />

 {errors.Name && <span>{errors.Name.message}</span> }


 <input {...register('Email',{
  required:'This Field is required',
  pattern:{value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ,message:'Invalid email'},
  minLength:{value:3,message:'Minimum 3 characters are required'},
  maxLength:{value:30,message:'Maximum 30 characters only'}
 })}className="Email" type="text" placeholder='Your Email'/><br />

{errors.Email && <span>{errors.Email.message}</span> }

 <input {...register('password',{
  required:'This Field is required',
  minLength:{value:8,message:'Minimum 8 characters are required'},
  maxLength:{value:20,message:'Maximum 20 characters only'}
 })} className="password" placeholder='password' /><br />

{errors.password && <span>{errors.password.message}</span> }

 <input  {...register('Renter',{
  required:'This Field is required',
  minLength:{value:8,message:'Minimum 3 characters are required'},
  maxLength:{value:20,message:'Maximum 30 characters only'},
  validate:(value)=>value== checking || "Password entered does not match"
 })} type="text" name="Renter" className="Renter" placeholder='Repeat your password' /><br />

{errors.Renter && <span>{errors.Renter.message}</span> }




 <p className='check'><input {...register('checkbox',{required:true})} type="checkbox" className="box" />I agree all statements in <a href="">Terms of service</a></p><br />
 
 
 {!submitted &&(
 <button type='submit' className='submit'> SIGN UP</button>
 )}



 {!submitted &&(
<p className='login'>Have already an account? <strong><a href="">Login here</a></strong></p>
)}
</>)}
   
   </form>

   </div>
  )
}

export default Form
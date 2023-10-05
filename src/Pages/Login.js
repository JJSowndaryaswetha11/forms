import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';
import '../Styles/Login.css'

const Login = () => {
    const[username, usernameupdate]=useState("");
    const[password,passwordupdate]=useState("");
    const navigates=useNavigate();

    useEffect(()=>{
        sessionStorage.clear()
    },[])
   
    const ProceedLogin = (e) =>{
        e.preventDefault();
        if(validate()){
        // console.log("proced")
        fetch(" http://localhost:3001/user/"+username).then((res)=>
        {
            return res.json();
        }).then((resp)=>{
            console.log(resp.data)
            if(Object.keys(resp).length===0)
            {
            toast.error('pales Enter Valide user')
            }
            else{
                if(resp.password=== password)
                {
                    toast.success("Success full Login")
                    sessionStorage.setItem("username",username)
                     navigates('/')
                }
                else{
                    toast.error('please Enter Valid Password')
                }
            }
        }).catch((err)=>{
           toast.error('Login Failed due to'+err.message)
        })
        }
    }

   const validate=()=>{
     let result=true;
     if(username==="" || username=== null)
     {
        result=false;
        toast.warning('Please Enter valid user Name')
     }

     if(password==="" || password === null)
     {
        result=false;
        toast.warning('Please Enter valid Password')
     }
     return result;

   } 
  return (
    <>
    <div className='containers'>
      <Container>
      <div className='row'>
        <div className='offset-lg-4 col-lg-4' style={{height:400}}>
            <form onSubmit={ProceedLogin}>
                <div className='card '>
                    <div className='card-header'>
                        <h2 className='text-center'>LOGIN</h2>
                    </div>

                    <div className='card-body'>
                        <div className='form-groups'>
                            <label>User Name</label>
                            <input className='form-control' value={username} onChange={e=>usernameupdate(e.target.value)}></input>
                        </div>
                         <div className='form-groups'>
                            <label>Password</label>
                            <input type='password' className='form-control' value={password} onChange={e=>passwordupdate(e.target.value)}></input>
                        </div>
                    </div>


                    <div className='card-footer '>
                        <button className='btn btn-primary px-4 py-2'>Login</button>
                        <Link to="/register" className='btn btn-success mx-1 text-center px-4 py-2'>NewUsers</Link>
                    </div>
                </div>
            </form>
        </div>
      </div>
      </Container>
      </div>
    </>
  )
}

export default Login
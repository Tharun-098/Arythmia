import React, {  useState } from 'react'

const LogPage = () => {
    const [change,setChange]=useState(false)
    const [pass,setPass]=useState('')
    const [signPass,setSignPass]=useState('')
    const [eye,setEye]=useState(true)
    const [signEye,setSignEye]=useState(true)
    const changeIcon=(e)=>{
        e.preventDefault()
        if(pass!=""){
    setEye(!eye)
    }}
const toggleicon=(e)=>{
    e.preventDefault()
        if(signPass!=""){
    setSignEye(!signEye)
    }}
    
    const changeClass=(e)=>{
        e.preventDefault()
          setChange(!change)        
    }
  return (
    <div className='container'>
        <div className="Login">
            <h2>Login</h2>
            <form action="">
                <div className="mail">
                    <label htmlFor='mail'>Username or Email</label>
                    <input type="text" placeholder='enter your name or email' name='mail' id='mail'/>
                </div>
                <div className="Password">
                    <label htmlFor='password'>Password</label>
                    <input type={eye?'password':'text'} value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='enter your password' name='password' id='password'/>
                    <button type='button' onClick={changeIcon}>{eye?<i className="fa-solid fa-eye" style={{fontSize:'15px'}}></i>:<i className="fa-regular fa-eye-slash" style={{fontSize:'15px'}}></i> }</button>
                </div>
                <div className="forget">
                    <input type='checkbox'/>
                    <p>Forgot your Password</p>
                </div>
                <button type='button' className='log'>login</button>
            </form>
                    <p style={{textAlign:'center',marginTop:'5px'}}>Doesn't have an account <span onClick={changeClass}>Sign Up</span></p>
        </div>     
        <div className="Signup">
        <h2>SignUp</h2>
        <form action="">
            <div className="name">
                <label htmlFor="name">Username</label>
                <input type="text" placeholder='enter your name'/>
            </div>
            <div className="Email">
                <label htmlFor="mail">Username</label>
                <input type='email' placeholder='enter your email'/>
            </div>
            <div className="Password">
                <label htmlFor="password">Set Password</label>
                <input type={signEye?'password':'text'} value={signPass} onChange={(e)=>setSignPass(e.target.value)} placeholder='enter your password'/>
                <button type='button' onClick={toggleicon}>{signEye?<i className="fa-solid fa-eye" style={{fontSize:'15px'}}></i>:<i className="fa-regular fa-eye-slash" style={{fontSize:'15px'}}></i> }</button>
            </div>
            <button className='sign' type='button'>SignUp</button>
        </form>
        <p style={{textAlign:'center',marginTop:'5px'}}>Already you hane an account <span onClick={changeClass}>login</span></p>
        </div>     
            {change?<div className="Toggle"><button className='button' onClick={changeClass}>{change?'Login':'SignUp'}</button></div>:
            <div className='Toggle active'><button className='button' onClick={changeClass}>{change?'Login':'SignUp'}</button></div>}
    </div>
  )
}
export default LogPage

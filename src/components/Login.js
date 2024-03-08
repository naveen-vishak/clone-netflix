import React from 'react'
import Header from './Header'
import BackGround from './BackGround'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <div>
        <div className='absolute bg-gradient-to-b from-black w-[100%] h-[100%]'>
            <Header/>
            <LoginForm/>
        </div>
        <BackGround/>
    </div>
    
  )
}

export default Login
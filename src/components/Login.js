import React from 'react';
import Header from './Header';
import BackGround from './BackGround';
import LoginForm from './LoginForm';
import { useSelector } from 'react-redux';

const Login = () => {
  const selector = useSelector(store => store.user);

  return (
    <div>
        <div className='absolute bg-black bg-opacity-40 w-[100%] h-[150%]'>
            <Header/>
            <LoginForm/>
        </div>
        <BackGround/>
    </div>
    
  )
}

export default Login
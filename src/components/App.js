import React, { useState } from 'react';
import "./App.css";
import { Login } from './Login';
import { Register } from './Register';

const App = () => {

  const [isLogin, setIsLogin] = useState(true);
  const [showPass, setShowPass] = useState(false);

  const showPassword = (e) => {
      const pass = e.target.previousSibling;

      if(!showPass){
        pass.setAttribute('type', 'text');
        e.target.classList.remove('fa-eye');
        e.target.classList.add('fa-eye-slash');
        setShowPass(true);
      }
      else{
        pass.setAttribute('type', 'password');
        e.target.classList.remove('fa-eye-slash');
        e.target.classList.add('fa-eye');
        setShowPass(false);
      }
  }


  return (
    <div className='container'>
      {
        isLogin ? <Login login={isLogin} setLogin={setIsLogin} showPass={showPassword} /> : <Register login={isLogin} setLogin={setIsLogin} showPass={showPassword} />
      }
    </div>
  )
}

export default App;

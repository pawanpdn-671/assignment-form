import React from 'react';
import hero_img from '../assets/hero-img.svg';
import UseForm from './UseForm';
import Validate from './Validate';

export const Register = ({login, setLogin, showPass}) => {
   const {handleChange, values, handleSubmit, errors} = UseForm(Validate, login);

   return (
      <div className='header'>
         <div className='content'>
            <div className='img-block'>
               <img src={hero_img} alt="form visual" />
            </div>

            <div className='content-heading-block'>
               <span className='content-title'>Sign Up</span>
               <span className='content-subtext'>Just a few clicks to start your journey.</span>
            </div>
         </div>

         <form className='form-block' onSubmit={handleSubmit}>
            <div className='form-group'>
               <label htmlFor="username">Username</label>
               <input type="text" name='username' placeholder='Username' value={values.username} onChange={handleChange} />

               {errors.username && <p className='error-msg'>{errors.username}</p>}
            </div>

            <div className='form-group'>
               <label htmlFor="email">Email</label>
               <input type="email" name='email' placeholder='Email' value={values.email} onChange={handleChange} />

               {errors.email && <p className='error-msg'>{errors.email}</p>}
            </div>

            <div className='form-group'>
               <label htmlFor="password">Password</label>
               <div className='password-block'>
                  <input type="password" name='password' placeholder='Password' value={values.password} onChange={handleChange} />
                  <i className="eye-btn fa-solid fa-eye" onClick={showPass}></i>
               </div>

               {errors.password && <p className='error-msg'>{errors.password}</p>}
            </div>

            <div className='footer'>
               <button type='submit' className='btn'>Register</button>

               <p className='reminder'>Already a member?<span className='reminder-btn' onClick={() => setLogin(true)}>Log in</span></p>
            </div>
         </form>
      </div>
   )
}
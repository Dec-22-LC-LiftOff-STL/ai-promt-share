import React, {useState} from 'react';
//import { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom';
import { Cookies } from 'react-cookie';


const Header = (data) => {
  const navigate = useNavigate()
  const cookies = new Cookies();
  const token = cookies.get('user_token');
  const userData = cookies.get('user_data');
  
  const Logout = () => {

    cookies.remove('user_data');
    cookies.remove('user_token');
    navigate("/")
  }


  return (
    <div className=" bg-slate-900 w-full text-white p-4 mb-4 flex font-sans font-bold shadow-lg">
      <h1 onClick={() => navigate('/')} className="font-bold self-center md:text-2xl cursor-pointer btn btn-ghost normal-case">Ai Prompt Share</h1>
      
      {userData !== undefined && 
        <button className='truncate md:visible invisible ml-auto mr-5 cursor-pointer text btn btn-ghost normal-case'>{userData["email"]}</button>
      }

      {userData !== undefined &&
      <div className=" dropdown dropdown-end">
        <button class=" outline-none btn btn-square btn-ghost">
          <svg tabIndex={0}  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-7 h-7 stroke-current outline-none"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <ul tabIndex={0} className="dropdown-content menu p-3 shadow mt-5 bg-slate-800 rounded-box w-52">
          <li><button>Profile</button></li>
          <li><button onClick={() => navigate('/CreatePost')}>Create Post</button></li>
          <li><button>Settings</button></li> 
          <li><button onClick={() => Logout()}>Logout</button></li>
        </ul>
      </div>
      }

      {userData === undefined && 
        <button onClick={() => navigate('/Login')} className=' ml-auto mr-5 cursor-pointer font-serif text'> Login </button>
      }

      {userData === undefined && 
        <button onClick={() => navigate('/Sign-Up')} className='cursor-pointer font-serif'> Sign Up </button>
      }

    </div>
  );
}

export default Header;


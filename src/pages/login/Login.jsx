import React from 'react';
import { useHistory } from 'react-router-dom';
import back from "../../assets/images/my-account.jpg";
import './login.css';
import { Link } from 'react-router-dom';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useState,useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useUser } from '../../UserContext';

const clientId="447438300966-emcm2oet2a7af0imi3eecit78rgu02to.apps.googleusercontent.com";

const expectedUsername = "mehakjindal0875@gmail.com";
const expectedPassword = "2110990875";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { user, setUser } = useUser();


  const handleLogin = () => {
    if (username === expectedUsername && password === expectedPassword) 
    {
        console.log("Username : ",username);
        console.log("Password : ",password);
      window.alert("User Identified");
      setUser(true);   
      history.push('/');   
    }
    else
    {
        window.alert("User Not Identified");
    }
  };
    useEffect(()=>{
        function start(){
            gapi.client.init({
                clientId:clientId,
                scope:""
            })
        };
        gapi.load('client:auth2',start);
    });

  return (
    <>
        <section className='login'>
            <div className="containers">
                <div className="backImg">
                    <img src={back} alt='' />
                    <div className='text'>
                        <h3>Login</h3>
                        <h1>My Account</h1>
                    </div>
                </div>
                <form>
                    <span>Username or email address*</span>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <span>Password*</span>
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className='button' onClick={handleLogin}>Log In</button>
                    <LoginButton />
                    <Link to="/register">Register</Link>
                </form>
            </div>
        </section>
    </>
  )
}

export default Login
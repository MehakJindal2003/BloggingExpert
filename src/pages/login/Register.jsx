import React , { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import back from "../../assets/images/my-account.jpg";
import './login.css';


const Register = () => {
  const [isFormValid, setFormValid] = useState(false);
  const hist=useHistory();

  const handleUpdate = () => {
    const usernameInput = document.querySelector('input[name="username"]');
    const emailInput = document.querySelector('input[name="email"]');
    const passwordInput = document.querySelector('input[name="password"]');


    if (usernameInput.value && emailInput.value && passwordInput.value) {
      console.log("Username : ",usernameInput.value);
      console.log("Email : ",emailInput.value);
      console.log("Password : ",passwordInput.value);
      alert('Account Registered');
      setFormValid(true);
      hist.push('/');
    } else {
      alert('Please fill in all fields.');
      setFormValid(false);
      usernameInput.classList.toggle('empty', !usernameInput.value);
      emailInput.classList.toggle('empty', !emailInput.value);
      passwordInput.classList.toggle('empty', !passwordInput.value);
    }
  };
  return (
    <>
        <section className='login'>
            <div className="containers">
                <div className="backImg">
                    <img src={back} alt='' />
                    <div className='text'>
                        <h3>Register</h3>
                        <h1>My Account</h1>
                    </div>
                </div>
                <form>
                    <span>Email address*</span>
                    <input type='email' name="email" required />
                    <span>Username*</span>
                    <input type='text' name="username" required />
                    <span>Password*</span>
                    <input type='password' name="password" required />
                    <button className='button' onClick={handleUpdate}>Register</button>
                    <Link to="/login">LogIn</Link>
                </form>
            </div>
        </section>
    </>
  )
}

export default Register
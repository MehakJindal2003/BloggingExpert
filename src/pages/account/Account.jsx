import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import image from "../../assets/images/user0875.png.jpg";
import './account.css';

const Account = () => {
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
      alert('Information updated');
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
      <section className='accountInfo'>
        <div className='container boxItems'>
          <h1>Account Information</h1>
          <div className='content'>
            <div className='left'>
              <div className="img flexCenter">
                <input type='file' src={image} alt='imgs'/>
                <img src={image} alt='images' />
              </div>
            </div>
            <div className="right">
              <label htmlFor='username'>Username</label>
              <input type='text' name="username" />
              <label htmlFor='email'>Email</label>
              <input type='email' name="email" />
              <label htmlFor='password'>Password</label>
              <input type='password' name="password" />
              <button className='button' onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Account;

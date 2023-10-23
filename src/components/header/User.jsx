import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { RiImageAddLine } from 'react-icons/ri';
import { IoSettingsOutline } from 'react-icons/io5';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrHelp } from 'react-icons/gr';
import { BiLogOut } from 'react-icons/bi';
import { useUser } from '../../UserContext';
import image from "../../assets/images/user0875.png.jpg";



const User = () => {
    //const [user, setUser] = useState(true);
    const { user,setUser } = useUser();
    const [profileOpen, setProfileOpen]=useState(false);
    const close=()=>{
        setProfileOpen(false);
    }
    const handleLogout = () => {
        // Set the user state to false when logging out
        setUser(false);
        // You can also perform any other logout-related actions here
    };
  return (
    <>
        <div className="profile">
            {user ?
            (
                <>
                    <button className='img' onClick={()=>setProfileOpen(!profileOpen)}>
                        <img src={image} alt='images' />
                    </button>

                    
                {profileOpen &&(
                    <div className="openProfile boxItems" onClick={close}>
                    <Link to='/account'>
                        <div className='image'>
                            <div className='img'>
                                <img src={image} alt='images' />
                            </div>
                            <div className="text">
                                <h4>Mehak Jindal</h4>
                                <p>Sector 20, Panchkula</p>
                            </div>
                        </div>
                    </Link>
                    <Link to='/create'>
                        <button className='box'>
                            <RiImageAddLine className='icon'/>
                            <h4>Create Post</h4>
                        </button>
                    </Link>
                    <Link to='/account'>
                        <button className='box'>
                            <IoSettingsOutline className='icon'/>
                            <h4>My Acount</h4>
                        </button>
                    </Link>
                    <Link to='/favourite'>
                        <button className='box'>
                            <AiOutlineHeart className='icon'/>
                            <h4>Favourites</h4>
                        </button>
                    </Link>
                    <Link to='/contact'>
                        <button className='box'>
                            <GrHelp className='icon'/>
                            <h4>Help</h4>
                        </button>
                    </Link>
    
                        <button className='box' onClick={handleLogout}>
                            <BiLogOut className='icon'/>
                            <h4>Log Out</h4>
                        </button>
                    
                    </div>
                )}

                </>
            ) : (
                <Link to='/login'>
                    <button>My Account</button>
                </Link>
            )}
        </div>
    </>
  )
};

export default User;
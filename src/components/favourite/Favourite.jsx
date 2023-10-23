import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai';
import './favourite.css';

const Favorite = () => {
  // Initialize favoriteBlogs state and retrieve it from local storage
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);

  useEffect(() => {
    // Retrieve favorite blogs from local storage
    const storedFavoriteBlogs = localStorage.getItem('favoriteBlogs');
    if (storedFavoriteBlogs) {
      setFavoriteBlogs(JSON.parse(storedFavoriteBlogs));
    }
  }, []);

  return (
    <div className='blog'>
      <div className='blogSearchHeading'>
        <h2>Your Favorite Blogs</h2>
      </div>

      <div className='container grid3'>
        {favoriteBlogs.length === 0 ? (
          <div className='center-text'>
            <div>No blog added to favorite</div>
          </div>
        ) : (
          favoriteBlogs.map((blog) => (
            <div className='box boxItems' key={blog.id}>
              <div className='img'>
                <img src={blog.cover} alt='' />
              </div>
              <div className='details'>
                <div className='tag'>
                  <AiOutlineTags className='icon' />
                  <a href='/'>#{blog.category}</a>
                </div>
                <Link to={`/details/${blog.id}`} className='link'>
                  <h3>{blog.title}</h3>
                </Link>
                <p>{blog.desc.slice(0, 180)}</p>
                <div className='date'>
                  <AiOutlineClockCircle className='icon' />
                  <label htmlFor=''>{blog.date}</label>
                  <AiOutlineComment className='icon' style={{ cursor: 'pointer' }} />
                  <label htmlFor=''>27</label>
                  <AiOutlineShareAlt className='icon' />
                  <label htmlFor=''>SHARE</label>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorite;

import React, { useEffect, useState } from 'react';
import { blog } from '../../assets/data/data';
import { useParams } from 'react-router-dom';
import './details.css';
import { FcLike, FcDislike } from 'react-icons/fc';

const Details = () => {
  const { id } = useParams();

  const [blogs, setBlogs] = useState(null);
  const [isInFavorites, setIsInFavorites] = useState(false);

  useEffect(() => {
    const selectedBlog = blog.find((blogItem) => blogItem.id === parseInt(id));

    if (selectedBlog) {
      setBlogs(selectedBlog);
      const storedFavorites = JSON.parse(localStorage.getItem('favoriteBlogs') || '[]');
      setIsInFavorites(storedFavorites.some((blogItem) => blogItem.id === selectedBlog.id));
    }
  }, [id]);

  const handleFavorite = () => {
    if (blogs) {
      const updatedFavorites = JSON.parse(localStorage.getItem('favoriteBlogs') || '[]');
      const isFavorite = updatedFavorites.some((blogItem) => blogItem.id === blogs.id);

      if (isFavorite) 
      {
        const filteredFavorites = updatedFavorites.filter((blogItem) => blogItem.id !== blogs.id);
        localStorage.setItem('favoriteBlogs', JSON.stringify(filteredFavorites));
        setIsInFavorites(false);
        alert(`${blogs.title} has been removed from your favorites.`);
      } 
      else 
      {
        updatedFavorites.push(blogs);
        localStorage.setItem('favoriteBlogs', JSON.stringify(updatedFavorites));
        setIsInFavorites(true);
        alert(`${blogs.title} has been added to your favorites.`);
      }
      console.log('Updated Blogs:', updatedFavorites);
    }
  };

  return (
    <>
      {blogs ? (
        <section className='singlePost'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                {/* <button className='button'>
                  <BsPencilSquare />
                </button> */}
                <button className='button' onClick={handleFavorite}>
                  {isInFavorites ? <FcDislike size='4x' /> : <FcLike size='4x' />}
                </button>
              </div>
              <h1>{blogs.title}</h1>
              <p>{blogs.desc}</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eum dignissimos provident alias expedita excepturi ad numquam asperiores ratione ipsum libero mollitia minus a officiis beatae, tenetur est necessitatibus cum.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem, rem doloribus totam eveniet ipsam atque blanditiis ullam provident optio corrupti ad culpa libero itaque. Incidunt nulla ea accusantium corporis!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda numquam repellat perferendis dolores sed! Illo accusantium ad excepturi libero? Neque nostrum repudiandae voluptas voluptate vero inventore libero cumque id alias.</p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Details;

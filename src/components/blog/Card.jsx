import React, { useState,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './blog.css';
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai';
import { blog } from '../../assets/data/data';
import { Link } from 'react-router-dom';
import { GiArchiveResearch } from 'react-icons/gi';

const Card = () => {
  const history = useHistory();


  const [showComments, setShowComments] = useState(Array(blog.length).fill(false));
  const [commentText, setCommentText] = useState(Array(blog.length).fill(''));
  const [searchInput, setSearchInput] = useState('');
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const toggleComment = (index) => {
      const updatedShowComments = [...showComments];
      updatedShowComments[index] = !showComments[index];
      setShowComments(updatedShowComments);

      if (!showComments[index]) {
          const updatedCommentText = [...commentText];
          updatedCommentText[index] = '';
          setCommentText(updatedCommentText);
      }
  };

  const updateCommentText = (index, text) => {
      const updatedCommentText = [...commentText];
      updatedCommentText[index] = text;
      setCommentText(updatedCommentText);
  };

  const submitComment = (index) => {
      const comment = commentText[index];
      console.log(`Comment on Blog - ${blog[index].title}: "${comment}"`);
      toggleComment(index);
  };


  useEffect(() => {
    const filteredBlogs = blog.filter((item) =>
      item.title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (favoriteBlogs.length > 0) {
      const favoriteBlogIds = favoriteBlogs.map((blog) => blog.id);
      const favoriteBlogsToShow = filteredBlogs.filter((item) => favoriteBlogIds.includes(item.id));
      setFilteredBlogs(favoriteBlogsToShow);
    } else {
      setFilteredBlogs(filteredBlogs);
    }
  }, [searchInput, favoriteBlogs]);

  return (
      <>
          <section className='blog'>
              <div className='blogSearchHeading'>
                <h2>Search Your Favourite Blog</h2>
              </div>
              <div className='search-bar'>
                  <input
                      type='text'
                      placeholder='Search blogs...'
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)} />
                  <button><GiArchiveResearch size='4x' color='white'/></button>
              </div>

              <div className='container grid3'>
                {filteredBlogs.length === 0 ? (
                  <div>No results found.</div>
                ) : (
                filteredBlogs.map((item, index) => (
                  <div className='box boxItems' key={item.id}>
                    <div className='img'>
                      <img src={item.cover} alt='' />
                    </div>
                    <div className='details'>
                      <div className='tag'>
                        <AiOutlineTags className='icon' />
                        <a href='/'>#{item.category}</a>
                      </div>
                      <Link to={`/details/${item.id}`} className='link'>
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.desc.slice(0, 180)}</p>
                      <div className='date'>
                        <AiOutlineClockCircle className='icon' />
                        <label htmlFor=''>{item.date}</label>
                        <AiOutlineComment className='icon' onClick={() => toggleComment(index)} style={{ cursor: 'pointer' }} />
                        <label htmlFor=''>27</label>
                        <AiOutlineShareAlt className='icon' />
                        <label htmlFor=''>SHARE</label>
                      </div>
                      {showComments[index] && (
                        <div className='comment-section'>
                          <textarea
                            placeholder='Write a comment...'
                            rows='4'
                            value={commentText[index]}
                            onChange={(e) => updateCommentText(index, e.target.value)} />
                          <button onClick={() => submitComment(index)} className='commentSubmitButton'>Submit</button>
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
      </>
  );
};
export default Card;
import React, { useState,useEffect } from 'react';
import './choice.css';
import { Link } from 'react-router-dom';
import { newBlogs } from '../../assets/data/data'; // Import your new blogs data
import { useHistory } from 'react-router-dom';
import { AiOutlineClockCircle, AiOutlineComment, AiOutlineShareAlt, AiOutlineTags } from 'react-icons/ai';

const categories = ['Healthcare', 'Skincare', 'Art and Craft', 'Festivals'];

const Choice = () => {
    const history = useHistory();


  const [showComments, setShowComments] = useState(Array(newBlogs.length).fill(false));
  const [commentText, setCommentText] = useState(Array(newBlogs.length).fill(''));
  const [searchInput, setSearchInput] = useState('');
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);

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
      console.log(`Comment on Blog - ${newBlogs[index].title}: "${comment}"`);
      toggleComment(index);
  };

  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);


    const blogsByCategory = newBlogs.filter((blog) => blog.category === category);
    setFilteredBlogs(blogsByCategory);
  };

  return (
    <div>
      <h2 id="center">Choose a Category:</h2>
      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={selectedCategory === category ? 'selected' : ''}
          >
            {category}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="blog">
          <h3 id="center">Blogs in the {selectedCategory} category:</h3>
          {/* <ul> */}
          <div className='container grid3'>
            {filteredBlogs.map((blog,index) => (
            //   <li key={blog.id}>
            //     <Link to={`/blog/${blog.id}`}>
            //       <img src={blog.cover} alt={blog.title} />
            //       <h4>{blog.title}</h4>
            //       <p>{blog.desc}</p>
            //     </Link>
            //   </li>
            <div className='box boxItems' key={blog.id}>
            <div className='img'>
              <img src={blog.cover} alt='' />
            </div>
            <div className='details'>
              <div className='tag'>
                <AiOutlineTags className='icon' />
                <a href='/'>#{blog.category}</a>
              </div>
              {/* <Link to={`/details/${blog.id}`} className='link'> */}
                <h3>{blog.title}</h3>
              {/* </Link> */}
              <p>{blog.desc.slice(0, 180)}</p>
              <div className='date'>
                <AiOutlineClockCircle className='icon' />
                <label htmlFor=''>{blog.date}</label>
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
          {/* </ul> */}
        </div>
        ))};
        </div>
        </div>
      )
    };
    </div>
  )
};

export default Choice;
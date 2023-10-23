import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './create.css';
import image from '../../assets/images/user0875.png.jpg';

const Create = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history=useHistory();

  const handleCreatePost = () => {
    if (!title || !content) {
      alert('Please fill in all fields');
    } else {
      alert('Post created successfully');
      history.push('/');
    }
  };

  return (
    <>
      <section className="newPost">
        <div className="container boxItems">
          <div className="img">
            <img
              src={image}
              alt="images"
            />
          </div>
          <form>
            <div className="inputFile flexCenter">
              <input type="file" required/>
            </div>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="button" type="button" onClick={handleCreatePost}>
              Create Post
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Create;

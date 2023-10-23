import React, { useState, useEffect } from 'react';
import './following.css';
import { domainData } from '../../assets/data/data';

const FamousPeoplePage = () => {
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [followedPeople, setFollowedPeople] = useState({});
  const [followerCount, setFollowerCount] = useState(0);

  const handleDomainSelection = (domain) => {
    setSelectedDomain(domain);
  };


  useEffect(() => {
    const storedFollowedPeople = JSON.parse(localStorage.getItem('followedPeople'));
    if (storedFollowedPeople) {
      setFollowedPeople(storedFollowedPeople);
      const count = Object.values(storedFollowedPeople).filter((isFollowed) => isFollowed).length;
      setFollowerCount(count);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('followedPeople', JSON.stringify(followedPeople));
  }, [followedPeople]);

  const toggleFollow = (person) => {
    const isFollowed = followedPeople[person.name];
    const updatedFollowedPeople = { ...followedPeople, [person.name]: !isFollowed };
    setFollowedPeople(updatedFollowedPeople);

    const newFollowerCount = Object.values(updatedFollowedPeople).filter((isFollowed) => isFollowed).length;
    setFollowerCount(newFollowerCount);
  };

  return (
    <div>
      <h2 id="center">Choose a Domain:</h2>
      <div className="category-buttons">
        {domainData.map((domain) => (
          <button
            key={domain.id}
            onClick={() => handleDomainSelection(domain)}
            className={selectedDomain === domain ? 'selected' : ''}
          >
            {domain.name}
          </button>
        ))}
      </div>
      <div>
        <div id="center">Following</div>
        <div id="center" className='countOfFollowers'>
          {followerCount}
        </div>
      </div>

      {selectedDomain && (
        <div className="blog">
          <h2 id="center">Famous People in {selectedDomain.name}</h2>
          <div className='container grid3'>
            {selectedDomain.famousPeople.map((person, index) => (
              <div key={index} className="box boxItems">
                <div className='img'>
                  <img src={person.image} alt={person.name} />
                </div>
                <div>
                  <p>{person.name}</p>
                </div>
                <button
                  className='followOrNot'
                  onClick={() => toggleFollow(person)}
                >
                  {followedPeople[person.name] ? 'Unfollow' : 'Follow'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FamousPeoplePage;

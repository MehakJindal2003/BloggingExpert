import './premium.css';
import React from 'react';
import { useState,useEffect } from 'react';
import premium1 from '../../assets/images/premium1.jpg';
import premium2 from '../../assets/images/premium2.jpg';
import premium3 from '../../assets/images/premium3.jpg';
import premium4 from '../../assets/images/premium4.jpg';
import premium5 from '../../assets/images/premium5.jpg';
import premium6 from '../../assets/images/premium6.jpg';

const Premium = () => {
    const [hover, setHover] = useState(false);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHover(!hover);
    }, 1000);
    return () => clearInterval(interval);
  }, [hover]);

  useEffect(() => {
    setPosition(hover ? 20 : 0);
  }, [hover]);
  return (
    <div className='premiumSubscribe'>
        <div className="subscribePrice" id="center" style={{ top: `${position}px` }}>
            <h2>SUBSCRIBE TO PREMIUM</h2>
            $5.99 / month
        </div>
        <div className="subscribeContainer">
            <div className='subscribePerks1'>
                <div className='subscribeCollab'>
                    <img src={premium1} width='400' height='200'/>
                    <p className="subsp1">Collaborate with your friends</p>
                    <p>Collaborating with friends is a wonderful way to achieve success in various aspects of life. The bonds of friendship provide trust, shared passions, diverse skills, and an unwavering support system. Whether it's tackling personal goals, creative projects, or professional endeavors, friends make the journey more enjoyable, rewarding, and successful.</p>
                </div>
                <div className='subscribeBlueTick'>
                    <img src={premium4} width='400' height='200'/>
                    <p className="subsp1">Get a blue-tick, get your account verified</p>
                    <p>In our interconnected world, the rise of social media has fundamentally transformed the way we communicate, share, and interact with one another. With billions of users across platforms like Twitter, Instagram, and Facebook, social media</p>
                </div>
            </div>
            <div className='subscribePerks2'>
                <div className='subscribeAdFree'>
                    <img src={premium2} width='400' height='200'/>
                    <p className="subsp1">Go Ad-Free</p>
                    <p>Going ad-free on websites means exactly what it implies: removing all forms of advertising from the web browsing experience. This can be achieved in several ways, including using ad-blocker software, subscribing to ad-free premium versions of websites, or supporting content creators directly through donations or subscriptions.</p>
                </div>
                <div className='subscribeTransition'>
                    <img src={premium5} width='400' height='200'/>
                    <p className="subsp1" >Add transitions, make your blog more interesting</p>
                    <p>Transitions are the animations and visual effects that occur when elements on a web page change from one state to another. These states can encompass a wide range of interactions, including page navigation, button clicks, form submissions, or even cursor movements. </p>
                </div>
            </div>
            <div className='subscribePerks3'>
                <div className='subscribeLive'>
                    <img src={premium3} width='400' height='200'/>
                    <p className="subsp1">Attend Live Streams of your favourite Star</p>
                    <p>Live streaming involves the transmission of audio and video content over the internet in real time. The availability of this technology on websites has unleashed an array of opportunities for content creators and organizations to connect with their audiences. With the simple click of a button, a live stream can transport viewers</p>
                </div>
                <div className='subscribeNetwork'>
                    <img src={premium6} width='400' height='200'/>
                    <p className="subsp1">Enhance your Network</p>
                    <p>The digital landscape has made it possible for individuals to break down geographical barriers and connect with people, ideas, and resources from around the world. Here are some of the key ways in which websites have been instrumental in enhancing networks on a personal and professional level.</p>
                </div>
            </div>
        </div>
        <div className='subscribeButton'>
            <button>JOIN OUR COMMUNITY</button>
        </div>
    </div>
  )
}

export default Premium
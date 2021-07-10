import React from 'react'
import Image from 'react-bootstrap/Image'
import '../css/Home.css'

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <div className='home-banner'>
          <Image
            src='https://media-exp1.licdn.com/dms/image/C4D03AQH6vamIy_CfoQ/profile-displayphoto-shrink_200_200/0/1583332097061?e=1631145600&v=beta&t=Ebdthp2fWFp68Fm3Gx08gkS7lhMPLIdpQ1aStg77YI4'
            roundedCircle
            className='me' />
          <hr />
          <div className='home-banner-text'>
            <p>
              <span className='green'>Hey, </span>
              <span className='grey'>I'm</span>
              <br />
              <span className='yellow'>Steven Fong</span>
            </p>
          </div>
        </div>
        <div className='grey intro'>
          Welcome to my website! Here, you'll find of my projects 
          as well as the varios websites I use to compete/practice in small 
          programming competitions. I hope you enjoy yours stay.
        </div>
        <div className='about'>
          <p>
            <span className='orange about-tag'>About Me:</span>
            <br />
            <span className='grey about-content'>
              I'm an undergraduate student at Stony Brook University majoring in Computer science.
              My main field of interest is in machine learning (mainly computer vision,
              but recently I have also taken a liking to NLP),
              artificial intelligence, and its applications. Outside of university, 
              I'm constantly trying to learn new things like Reactjs and android
              development. 
              As for my other non developer hobbies, 
              I am also extremely invested in competitive programming (my goal is to reach at least grandmaster on Codeforces), 
              and discovering new music.
              </span>
          </p>
        </div>
      </div>
    );
  }
}
export default Home;
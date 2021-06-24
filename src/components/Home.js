import React from 'react'
import '../css/Home.css'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='home-container'>
        <div className='home-banner'>
          <video src='/videos/1621366718.mp4' autoPlay loop muted />
          <div className='home-banner-text'>
            <h1>
              Hi, I'm<br />
              Steven Fong<br />
              ___________<br />
              Welcome to my Website
            </h1>
          </div>
        </div>
        <div className='home-info'>
          <h2>
            What you'll find
          </h2>
        </div>
      </div>
    );
  }
}
export default Home;
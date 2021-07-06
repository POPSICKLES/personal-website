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
          roundedCircle className='me'/>
          <div className='home-banner-text'>
            <h1>
              Hey, I'm<br />
              Steven Fong<br />
            </h1>
          </div>
        </div>
        <div className='home-info'>
        </div>
      </div>
    );
  }
}
export default Home;
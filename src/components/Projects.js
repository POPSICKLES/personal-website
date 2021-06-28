import React from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'
import '../css/projects.css'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: null,
    }
  }
  componentDidMount() {
    const path = 'https://api.github.com/user/repos';
    const options = {
      method: 'GET',
      url: path,
      headers: {
        Authorization: `token ${process.env.REACT_APP_API_KEY}`,
        'Content-Type': 'application/json',
      },
    }
    axios(options).then(res => {
      console.log(res.data);
      let sortedData = res.data.sort((a, b) => {
        return a.updated_at < b.updated_at;
      })
      this.setState({ cardList: res.data.map(this.createCard) });
    })
      .catch(err => {
        console.log(err);
      })
  }
  createCard(proj) {
    const card =
      <div className='item'>
        <Card style={{ width: '20rem', margin: '2rem 2rem 2rem 2rem' }} className='item'>
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Updated: {proj.updated_at.substring(0, 10)}</Card.Subtitle>
            <Card.Text>{proj.description}</Card.Text>
            <Card.Link href={proj.git_url}>Github Url</Card.Link>
          </Card.Body>
        </Card>
      </div>
    return card;
  }
  render() {
    return (
      <div className='projects-container'>
        <div className='projects-list'>
          {this.state.cardList}
        </div>
      </div>
    )
  }
}
export default Projects;
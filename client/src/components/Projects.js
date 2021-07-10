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
    const path = 'http://localhost:8080/git-repos';
    const options = {
      method: 'GET',
      url: path,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    axios(options).then(res => {
      res.data.sort((a, b) => {
        return a.updated_at < b.updated_at;
      })
      this.setState({ cardList: res.data.map(this.createCard) });
    }).catch(err => {
      console.log(err);
    })
  }
  createCard(proj, i) {
    const card =
      <div className='item' key={i}>
        <Card style={{ width: '20rem', margin: '2rem 2rem 2rem 2rem' }} className='item'>
          <Card.Body>
            <Card.Title>{proj.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Updated: {proj.updated_at.substring(0, 10)}</Card.Subtitle>
            <Card.Text>{proj.description}</Card.Text>
            <Card.Link href={proj.html_url}>Github Url</Card.Link>
          </Card.Body>
        </Card>
      </div>
    return card;
  }
  render() {
    return (
      <div className='projects-container'>
        <div className='projects-header'>
          <h2>
            Projects
          </h2>
        </div>
        <div className='projects-list'>
          {this.state.cardList}
        </div>
      </div>
    )
  }
}
export default Projects;
import React from 'react'
import axios from 'axios'
import { Card, ListGroup } from 'react-bootstrap'
import {
  Line,
  LineChart,
  XAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  ReferenceLine
} from 'recharts'
import '../css/contests.css'

class Contests extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      userRating: null,
      userActivity: null,
    }
  }
  componentDidMount() {
    const p = 'http://localhost:8080/cf';
    axios.get(p).then((res) => {
      this.setState({
        userInfo: res.data.info,
        userRating: res.data.rating,
        userActivity: res.data.status
      });
    });
  }
  render() {
    let na = 'N/A';
    let rating = this.state.userInfo ? this.state.userInfo.rating : na;
    let mrating = this.state.userInfo ? this.state.userInfo.maxRating : na;
    let rank = this.state.userInfo ? this.state.userInfo.rank : na;
    const data =
      this.state.userRating ? this.state.userRating.map((e) => {
        return {
          name: e.contestName,
          placed: e.rank,
          Rating: e.newRating,
        };
      }) : [];
    let activity_list =
      this.state.userActivity ? this.state.userActivity.map((e) => {
        let variant = e.verdict === 'OK' ? 'success' : 'danger';
        return (
          <ListGroup.Item variant={variant}>
            <div className='contest-name'>
              <b>{e.problem.name}</b> (Verdict: {e.verdict})
            </div>
            <div className='contest-placement'>
              Problem Rating: {e.problem.rating}
            </div>
          </ListGroup.Item>
        );
      }) : na;
    return (
      <div className='contests-container'>
        <Card className='contest-cards'>
          <Card.Header as='h4' className='flex justify-left'>CodeForces</Card.Header>
          <Card.Body>
            <Card.Title as='h4' className='flex justify-left'>Profile</Card.Title>
            <Card.Title as='h5' className='flex justify-left float-left'>Current Rating:</Card.Title>
            <Card.Text className='flex justify-left'>{rating} (max: {mrating})</Card.Text>
            <Card.Title as='h5' className='flex justify-left float-left'>Current Rank:</Card.Title>
            <Card.Text className='flex justify-left'>{rank}</Card.Text>
            <Card.Title as='h4' className='flex justify-left'>Contest Rating</Card.Title>
            <ResponsiveContainer width='100%' aspect={1.5}>
              <LineChart
                width={100}
                height={100}
                data={data}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} interval={3}/>
                <YAxis domain={[0, Math.max(2600, mrating+100)]} tickCount={14}/>
                <ReferenceLine y={2400} label="Grandmaster" stroke="red" />
                <ReferenceLine y={2200} label="International Master" stroke="orange" />
                <ReferenceLine y={2000} label="Master" stroke="orange" />
                <ReferenceLine y={1800} label="Candidate Master" stroke="purple" />
                <ReferenceLine y={1600} label="Expert" stroke="blue" />
                <ReferenceLine y={1400} label="Specialist" stroke="aqua" />
                <ReferenceLine y={1200} label="Apprentice" stroke="green" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="Rating" stroke="#ff7300" yAxisId={0} />
              </LineChart>
            </ResponsiveContainer>
            <Card.Title as='h4' className='flex justify-left'>Activity</Card.Title>
            <ListGroup >{activity_list}</ListGroup>
            <Card.Link className='flex justify-left' href='https://codeforces.com/profile/popsickles'>CodeForces</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }

}
export default Contests;
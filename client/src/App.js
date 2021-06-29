import {
  Switch,
  Route,
} from 'react-router-dom'
import Nbar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contests from './components/Contests.js'
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dotenv'

const App = () => {
  return (
    <div className="App">
      <Nbar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contests">
          <Contests />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

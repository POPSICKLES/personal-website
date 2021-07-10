import {
  Switch,
  Route,
} from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import Projects from './components/Projects.js'
import Contests from './components/Contests.js'
import Footer from './components/Footer.js'
import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'dotenv'

const App = () => {
  return (
    <div className="App">
      <Navbar/>
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
      <Footer/>
    </div>
  );
}

export default App;

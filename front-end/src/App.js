import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './templates/home'
import Neon from './templates/neon'
import './App.css';

function App() {
  return (
    <Router>
      <Link route={'/'}>Home</Link>
      <Link route={'/neon'}>Neon</Link>

      <Switch>
        <Route exact path='/'><Home /></Route>
        <Route path='/neon'><Neon /></Route>
        <Route path='*'><NotFound /></Route>
      </Switch>

    </Router>
  );
}

export default App;

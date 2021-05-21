import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Link route={'/'}>Home</Link>
      <Link route={'/neon'}>Neon</Link>

      <Switch>
        <Route exact path='/'></Route>
        <Route path='/neon'></Route>
      </Switch>

    </Router>
  );
}

export default App;

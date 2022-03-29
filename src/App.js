import './App.css';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import ComicDetails from './components/ComicDetails'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/details/:id'>
            <ComicDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

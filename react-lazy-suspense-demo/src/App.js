import React, { Suspense } from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Contact = React.lazy(() => import('./Contact'));
const About = React.lazy(() => import('./About'));

function App() {
  return (
    <div className='app'>
      <Router>
        <nav>
          <ol>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>contact</Link>
            </li>
          </ol>
        </nav>
        <Switch>
          <Route path='/about'>
            <Suspense fallback={() => <h2>Loading...</h2>}>
              <About />
            </Suspense>
          </Route>
          <Route path='/contact'>
            <Suspense fallback={() => <h2>Loading...</h2>}>
              <Contact />
            </Suspense>
          </Route>
          <Route path='/'>
            <Suspense fallback={() => <h2>Loading...</h2>}>
              <Home />
            </Suspense>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

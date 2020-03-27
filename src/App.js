import React from 'react';
import { Link, Route } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

import Login from './components/login'
import Register from './components/register'
import Jokes from './components/jokes'

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <Link to='/login'><button>Login</button></Link>
        <Link to='/register'><button>Register</button></Link>
        <Link to='/jokes'><button>Jokes</button></Link>
      </Route>

      <Route path='/login' component={Login} />

      <Route path='/register' component={Register} />

      <PrivateRoute path='/jokes' component={Jokes} />

    </div>
  );
}

export default App;

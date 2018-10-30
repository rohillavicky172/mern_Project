/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import createProject from './components/projects/CreateProject'



// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}


if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./App');
}

// react-router setup with code-splitting
export default (
  <Route excat path="/" component={App}>
      <Route path="/project/:id" component={ProjectDetails} ></Route>
      <Route path='/signin' component={SignIn} ></Route>
      <Route path='/signup' component={SignUp} ></Route>
      <Route path='/create' component={createProject} ></Route>
  </Route>
  
);

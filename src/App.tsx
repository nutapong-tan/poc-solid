import { Component } from 'solid-js';
import { Route } from '@solidjs/router';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

const App: Component = () => {
  return (
    <>
      <Route path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </>
  );
};

export default App;
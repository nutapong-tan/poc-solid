import { Component, JSX } from 'solid-js';
import { useLocation } from '@solidjs/router';
import Navbar from '../components/Navbar';

const Template: Component<{ children: JSX.Element }> = (props) => {
    const location = useLocation();
  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <main class="main-content">
        {props.children}
      </main>
    </>
  );
};

export default Template;
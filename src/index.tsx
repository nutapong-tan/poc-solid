import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import App from './App';

import './styles/main.scss';

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById('root') as HTMLElement
);
import { createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { handleLogin } from '../controllers/authController';
import Template from '../layouts/template';

const Login = () => {
  const [username, setUsername] = createSignal('');
  const navigate = useNavigate();

  const onSubmit = () => {
    handleLogin(username());
    navigate('/home');
  };

  return (
    <Template>
      <div class="login-page">
        <h1>Login</h1>
        <input
          type="text"
          value={username()}
          onInput={(e) => setUsername(e.currentTarget.value)}
          placeholder="Enter username"
        />
        <button onClick={onSubmit}>Login</button>
      </div>
    </Template>
  );
};

export default Login;

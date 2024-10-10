import { A } from '@solidjs/router';
import { fetchUsername, handleLogout } from '../controllers/authController';

const Navbar = () => {
  const username = fetchUsername();

  return (
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">
          <A href="/">POC Solid</A>
        </div>
        <ul class="menu">
          {!username ? (
            <>
              <li><A href="/">Login</A></li>
            </>
          ) : (
            <>
              <li><A href="/home">Home</A></li>
              <li><A href="/about">About</A></li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

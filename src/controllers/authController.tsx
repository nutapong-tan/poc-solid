import { login, getUsername, logout } from '../models/authModel';

export const handleLogin = (name: string) => {
  if (name.trim()) {
    login(name);
  }
};

export const handleLogout = () => {
  logout();
};

export const fetchUsername = () => {
  return getUsername();
};

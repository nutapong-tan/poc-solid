import { createSignal } from 'solid-js';

// This handles login state
const [username, setUsername] = createSignal<string | null>(null);

export const login = (name: string) => {
  setUsername(name);
};

export const logout = () => {
  setUsername(null);
};

export const getUsername = () => username();

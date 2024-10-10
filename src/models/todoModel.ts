import { createSignal } from 'solid-js';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const [todos, setTodos] = createSignal<Todo[]>([]);

export const addTodo = (text: string) => {
  const newTodo: Todo = { id: Date.now(), text, completed: false };
  setTodos([...todos(), newTodo]);
};

export const toggleTodo = (id: number) => {
  setTodos(
    todos().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  );
};

export const getTodos = () => todos();

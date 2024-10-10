import { addTodo, toggleTodo, getTodos } from '../models/todoModel';

export const handleAddTodo = (text: string) => {
  if (text.trim() !== '') {
    addTodo(text);
  }
};

export const handleToggleTodo = (id: number) => {
  toggleTodo(id);
};

export const fetchTodos = () => {
  return getTodos();
};
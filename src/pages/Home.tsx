import { createSignal, For } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { handleAddTodo, handleToggleTodo, fetchTodos } from '../controllers/todoController';
import { fetchUsername } from '../controllers/authController';
import Template from '../layouts/template';

const Home = () => {
  const [newTodo, setNewTodo] = createSignal('');
  const todos = fetchTodos();
  const username = fetchUsername();
  const navigate = useNavigate();

  if (!username) {
    navigate('/');
    return null;
  }

  const onSubmit = () => {
    handleAddTodo(newTodo());
    setNewTodo('');
  };

  return (
    <Template>
      <div class="home-page">
        <h1>Welcome, {username}</h1>
        <div class="todo-section">
          <h2>Todo List</h2>
          <input
            type="text"
            value={newTodo()}
            onInput={(e) => setNewTodo(e.currentTarget.value)}
            placeholder="Add new todo"
          />
          <button onClick={onSubmit}>Add Todo</button>

          <ul>
            <For each={todos}>
              {(todo) => (
                <li>
                  <label>
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => handleToggleTodo(todo.id)}
                    />
                    <span style={{ 'text-decoration': todo.completed ? 'line-through' : 'none' }}>
                      {todo.text}
                    </span>
                  </label>
                </li>
              )}
            </For>
          </ul>
        </div>
      </div>
    </Template>
  );
};

export default Home;

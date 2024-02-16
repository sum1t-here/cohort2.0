import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
  const [list, setList] = useState([
    { id: 1, todoData: 'todo 1', finished: false },
    { id: 2, todoData: 'todo 2', finished: false },
  ]);
  return (
    <div>
      <AddTodo
        updateList={(todo) =>
          setList([
            ...list,
            { id: todo.length + 1, todoData: todo.todoData, finished: false },
          ])
        }
      />
      <TodoList list={list} updateList={setList} />
    </div>
  );
}

export default App;

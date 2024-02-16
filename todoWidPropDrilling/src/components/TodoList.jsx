/* eslint-disable react/prop-types */
import Todo from './Todo';

export default function TodoList({ list, updateList }) {
  return (
    <div>
      {list.length > 0 &&
        list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            isFinished={todo.finished}
            todoData={todo.todoData}
            changeFinished={(isFinished) => {
              const updatedList = list.map((t) => {
                if (t.id === todo.id) {
                  todo.finished = isFinished;
                }
                return t;
              });
              updateList(updatedList);
            }}
          />
        ))}
    </div>
  );
}

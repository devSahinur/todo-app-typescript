import React from "react";

interface IProps {
  todo: String;
  removeTodo: Function;
}

const Todo: React.FC<IProps> = ({ todo, removeTodo }: IProps): JSX.Element => {
  return (
    <>
      <div className="all_todos">
        <div className="todo d-flex justify-content-between align-items-center">
          <h3>Todo: {todo}</h3>
          <button
            onClick={() => removeTodo(todo)}
            className="delete"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Todo;

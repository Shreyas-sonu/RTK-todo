import { useSelector, useDispatch } from "react-redux";
import { updateValue, addTask, editAddTask } from "../app/todoSlice";
import List from "./List";

const TodoList = () => {
  const state = useSelector(state => state.todo);
  const { inputTaskValue, todos, selectedEditTask } = state;
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(updateValue(e.target.value));
  };

  const handleKeyEnter = e => {
    if (e.key === "Enter") {
      dispatch(addTask());
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter task"
        value={inputTaskValue}
        onChange={handleChange}
        onKeyDown={handleKeyEnter}
      />
      {selectedEditTask ? (
        <button onClick={() => dispatch(editAddTask())}>Edit</button>
      ) : (
        <button onClick={() => dispatch(addTask())}>Add</button>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        {todos.length ? (
          todos.map(todo => <List key={todo.id} {...todo} />)
        ) : (
          <h3>No todos...</h3>
        )}
      </div>
    </>
  );
};

export default TodoList;

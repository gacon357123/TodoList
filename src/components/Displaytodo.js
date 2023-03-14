import { DragDropContext } from "react-beautiful-dnd";

const Displaytodo = (props) => {
  const { listTodo, deleteTodo } = props;

  return (
    <div>
      <div>====List to do====</div>
      {listTodo.map((item, index) => {
        return (
          <div>
            <div key={item.id}>{item.name}</div>
            <button onClick={() => deleteTodo(item.id)}>del</button>
          </div>
        );
      })}
    </div>
  );
};

export default Displaytodo;

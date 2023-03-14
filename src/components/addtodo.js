import { Draggable } from "react-beautiful-dnd";


const Addtodo = (props) =>{
    const {todo,setTodo,ClickBtn}= props;
    return (
        <div> 
            <label>Todo name</label>
            <input value={todo} type="text" onChange={(event)=>setTodo(event.target.value)}/>
            <button type="submit" onClick={() => {ClickBtn()}}>Submit</button>
            <br  /><br/> 
        </div>
    )
}

export default Addtodo;
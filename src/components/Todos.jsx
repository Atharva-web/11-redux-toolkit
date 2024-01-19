import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    
    return (
    <>
        {todos.map((todo) => (
            <div key={todo.id}>
                {todo.text} <button onClick={() => dispatch(removeTodo(todo.id))}> X </button>
            </div>
        ))}
    </>
    );
}

export default Todos;
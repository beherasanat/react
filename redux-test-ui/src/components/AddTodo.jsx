import {useState} from 'react';
import {addTodo} from "../features/todo/todoSlice.js";
import {useDispatch} from "react-redux";

function AddTodo() {
    const dispatch = useDispatch();
    const [input, setInput] = useState('');
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    }


    return (
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default AddTodo;
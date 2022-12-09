import React,{useEffect, useRef} from 'react'
import { useTodoCOntext } from './AppContext';
import TodoList from './TodoList';

function UseReducerSample2() {
    const txtTodoRef = useRef();
    const {todosDispatch,ACTION} = useTodoCOntext();

    function handleAddingTodo(){
        todosDispatch({type:ACTION.ADD_TODO, payload: {description:txtTodoRef.current.value}});
        txtTodoRef.current.value = ""
    }
    


  return (<>

    
    <div>UseReducerSample2#2</div>
  
        <input type="text" ref={txtTodoRef} />
        <button onClick={handleAddingTodo}>Add</button>
        <TodoList/>
    


    </>)
}

export default UseReducerSample2
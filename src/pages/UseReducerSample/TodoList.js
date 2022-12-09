import React,{useRef,useState} from 'react'
import { useTodoCOntext } from './AppContext'

function TodoList() {
    const txtEditRef=useRef();
    const {todos,todosDispatch,ACTION,editId,setEditId,editMode,setEditMode} = useTodoCOntext()
   const [currentlyEditing,setCurrentlyEditing] = useState(false);
   
    const handleCompleteTodo=txtId=>{
        todosDispatch({type:ACTION.COMPLETED_TODO,payload:{id:txtId}});
    }
    const handleEditTodo=txtId=>{
        setCurrentlyEditing(prev=>true);
        todosDispatch({type:ACTION.EDIT_TODO,payload:{id:txtId}});
    }
    const handleDeleteTodo=txtId=>{
        todosDispatch({type:ACTION.DELETE_TODO,payload:{id:txtId}});
    }
    function handleSaveEditTodo(currentId,desc){
        setCurrentlyEditing(prev=>false);
        todosDispatch({type:ACTION.SAVE_EDIT_TODO, payload: {id:currentId,description:desc}});
      }
    function handleCancelEditTodo(currentId){
        setCurrentlyEditing(prev=>false);
        todosDispatch({type:ACTION.CANCEL_EDIT_TODO, payload: {id:currentId}});
      }
  return (<>
        <ul>
            {todos.map(item=>
                <li key={item.id}>
                {item.editMode
                    ?
                    <> 
                        <input ref={txtEditRef} type="text" defaultValue={item.description} />
                        <button onClick={()=>handleSaveEditTodo(item.id,txtEditRef.current.value)}>Save</button>
                        <button onClick={()=>handleCancelEditTodo(item.id)}>Cancel</button>
                        
                    </>
                    : !currentlyEditing &&
                    <>
                        {item.description}
                        <button onClick={()=>handleCompleteTodo(item.id)} >
                        {item.completed?"Not Completed":"Completed"}
                        </button>
                        <button onClick={()=>handleEditTodo(item.id)}>Edit</button>
                        <button onClick={()=>handleDeleteTodo(item.id)}>Delete</button>
                    </>
                }
                </li>
            )}
        </ul>
   
    </>)
}

export default TodoList
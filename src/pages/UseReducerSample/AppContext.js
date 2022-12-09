import React,{createContext,useContext,useReducer,useState} from 'react'
const TodoContext = createContext();

const ACTION={
  ADD_TODO: "add_todo",
  COMPLETED_TODO: "completed_todo",
  EDIT_TODO: "edit_todo",
  DELETE_TODO: "delete_todo",
  SAVE_EDIT_TODO: "save_edit_todo",
  CANCEL_EDIT_TODO: "cancel_edit_todo"
}

function reducerFunc(todos,action){

  const addTodo=(todos,action)=>{
    return [...todos,{
      id: Math.floor(Date.now()+Math.random()*1000),
      description: action.payload.description,
      completed:false,
      editMode:false
     }]
  }

  const completedTodo=(todos,currentId)=>{
   return todos.map(todo=>{
    if(todo.id===currentId){
      return {...todo, completed:!todo.completed}
    }
    return {...todo}
   });
  }

  const deleteTodo=(todos,currentId)=>{
    return todos.filter(todo=>todo.id!==currentId)
   }

   const editTodo = (todos,currentId)=>{
    console.log(currentId)
    return todos.map(todo=>todo.id===currentId?{...todo,editMode:true}:{...todo})
   }

   const saveEditTodo = (todos,newpayload)=>{
    return todos.map(todo=>todo.id===newpayload.id?{...todo,description:newpayload.description,editMode:false}:{...todo})
   }

   const cancelEditTodo = (todos,currentId)=>{
    console.log(currentId)
    return todos.map(todo=>todo.id===currentId?{...todo,editMode:false}:{...todo})
   }


  //console.log(action)
  switch(action.type){
    case ACTION.ADD_TODO:
      return addTodo(todos,action)
    case ACTION.COMPLETED_TODO:
      return completedTodo(todos,action.payload.id);
    case ACTION.EDIT_TODO:
      return editTodo(todos,action.payload.id)
    case ACTION.DELETE_TODO:
          return deleteTodo(todos,action.payload.id);
    case ACTION.SAVE_EDIT_TODO:
        return saveEditTodo(todos,action.payload);
    case ACTION.CANCEL_EDIT_TODO:
        return cancelEditTodo(todos,action.payload.id);
    default:
      return [...todos]
  }
}



function AppContext({children}) {
  const [todos,todosDispatch]=useReducer(reducerFunc,[]);
  const [editId,setEditId] = useState('');
  const [editMode,setEditMode] = useState(false);

  return (
    <TodoContext.Provider value={{todos,todosDispatch,ACTION,editId,setEditId,editMode,setEditMode}}>
      {children}
    </TodoContext.Provider>
  )
}

export default AppContext

export const useTodoCOntext = () => {return useContext(TodoContext)}
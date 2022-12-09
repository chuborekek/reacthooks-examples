import React, { useReducer } from 'react'

const ACTION ={
    INCREMENT: "increment",
    DECREMENT: "decrement"
}

function chuReducer(state,action){

    switch(action.type){
        case ACTION.INCREMENT:
            return {...state, count:state.count+1}
        case ACTION.DECREMENT:
                return {...state, count:state.count-1}
        default:
            return {...state}
    }
}

function UseReducerSample1() {
    const [state,chuDispatch] = useReducer(chuReducer,{count:0});

    const incrementer = () =>{
        chuDispatch({type: ACTION.INCREMENT});
    }
   
    const decrementer = () =>{
        chuDispatch({type:ACTION.DECREMENT});
    }

  return (<>
    <div>UseReducerSample#1</div>
    <button onClick={decrementer}>-</button>
    {state.count}
    <button onClick={incrementer}>+</button>
    
    </>)
}

export default UseReducerSample1
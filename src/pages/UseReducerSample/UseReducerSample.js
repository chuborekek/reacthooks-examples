import React from 'react'
import AppContext from './AppContext'
import UseReducerSample1 from './UseReducerSample1'
import UseReducerSample2 from './UseReducerSample2'

function UseReducerSample() {
  return (<>
    <div>UseReducerSample</div>
    <AppContext>
        <UseReducerSample1/>
        <UseReducerSample2/>
    </AppContext>
    </>)
}

export default UseReducerSample
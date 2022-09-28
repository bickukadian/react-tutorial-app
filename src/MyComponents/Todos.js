import React from 'react'
import Card from './card';
import {TodoItem} from './TodoItem'
import "./todo.css"

export const Todos = (props) => {

  let myStyle = {
    minHeight : "70vh",
    margin : "10vh auto"
  }

  return (
    <div>
        <div className = "containerList" style={myStyle}>
          <h3 className="my-3">Todos List</h3>
          <div className="mycontainer">
          {props.todos.length===0? "No Todos to Display":
          props.todos.map((todo)=>{
            return  (
            <Card todo={todo} title={todo.title} description={todo.desc} key={todo.sno} onClick={props.onDelete}/>
            )
          })
        }
          </div>
        </div>
    </div>
  )
}

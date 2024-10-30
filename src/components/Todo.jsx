import React, { useEffect, useState } from 'react'
import "./Todo.css"

export default function Todo() {
  const [todos, addtodo]  = useState([])

  const [num, setNum] = useState(0)

  function setTodo(todo){
      addtodo([...todos, todo])
      addNum()
  }
  function deleteTodo(todo){
    let index = todos.indexOf(todo)
    todos.splice(index, 1)
    addtodo([...todos])
    subNum()
  }
  function addNum(){
    setNum(todos.length + 1)
  }
  function subNum(){
    setNum(todos.length)
  }

  useEffect(()=>{
    console.log("Página actualizada")
  })

  return (
    <div>
      <h1>todo List:</h1>
      <input type="text" id='todo-input'/>
      <button onClick={() => setTodo(document.getElementById("todo-input").value)}>Añadir tarea</button>
      {todos.map(todo => (
        <ul>
          <li key={todo}>{todo} <button onClick={() => deleteTodo(todo)}>Eliminar</button></li>
        </ul>
      )) }
      <p> <h3>Numero de tareas: <strong>{num}</strong></h3></p>
    </div>


  )
}

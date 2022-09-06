import React from 'react'
function Todo(todo) {
  return (
    <div>
        <li key={todo.title}>{todo}</li>
    </div>
  )
}

export default Todo
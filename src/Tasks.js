import React, { useState, useEffect } from "react"
import uuid from "uuid/v4"

function Tasks() {
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])
  const [completedTasks, setCompletedTasks] = useState([])

  const updateTaskText = event => {
    setTaskText(event.target.value)
  }

  const addTask = () => {
    setTasks([...tasks, { taskText, id: uuid() }])
  }

  const completeTask = completedTask => () => {
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }

  const deleteTask = task => () => {
    setCompletedTasks(completedTasks.filter(t => t.id !== task.id))
  }

  return (
    <div>
      <h3>Tasks</h3>
      <div className='form'>
        <input onChange={updateTaskText} value={taskText} />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className='task-list'>
        {tasks.map(task => (
          <div key={task.id} onClick={completeTask(task)}>
            {task.taskText}
          </div>
        ))}
      </div>
      <div className='completed-list'>
        {completedTasks.map(task => (
          <div key={task.id}>
            {task.taskText} <span onClick={deleteTask(task)}>🚫</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tasks

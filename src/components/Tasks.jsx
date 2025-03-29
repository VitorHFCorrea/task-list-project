import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { ChevronRightIcon, X, CheckSquare, Square } from 'lucide-react'

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate() //navigate hook to travel between pages

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams() //URLSearchParams to handle query strings
    query.set('title', task.title)
    query.set('description', task.description) //set the title and description in the query string
    navigate(`/task?${query.toString()}`) //navigate to the task page with that query string
  }

  return (
    <ul className='space-y-4 p-6 bg-sky-200 rounded-md shadow'>
      {tasks.map((task) => (
        <li key={task.id} className='flex gap-2'>
          <button
            onClick={() => onTaskClick(task.id)}
            className={`flex items-center gap-2 bg-sky-400 text-left w-full text-white font-medium p-2 rounded-md`}
          >
            <span
              className={`flex items-center gap-2 ${
                task.isCompleted && 'opacity-75 line-through'
              }`} //line-through if the task is completed
            >
              {task.isCompleted ? <CheckSquare /> : <Square />}
              {task.title}
            </span>
          </button>

          <Button onClick={() => onSeeDetailsClick(task)}>
            <ChevronRightIcon />
          </Button>

          <Button onClick={() => onDeleteTaskClick(task.id)}>
            <X />
          </Button>
        </li>
      ))}
    </ul>
  )
}

export default Tasks

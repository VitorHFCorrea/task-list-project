import { ChevronLeftIcon } from 'lucide-react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Title from '../components/Title'

function TaskPage() {
  const navigate = useNavigate() //navigate hook to travel between pages
  const [searchParams] = useSearchParams() //useSearchParams to get the query string
  const title = searchParams.get('title') //get the title from the query string
  const description = searchParams.get('description') //get the description from the query string
  return (
    <div className='flex justify-center w-screen h-screen overflow-hidden bg-sky-500 p-6'>
      <div className='w-[500px] mx-auto space-y-4'>
        <div className='flex justify-center relative'>
          <button
            onClick={() => navigate(-1)} //when clicked, navigate back
            className='absolute left-0 top-0 bottom-0 text-sky-100'
          >
            <ChevronLeftIcon />
          </button>

          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className='bg-sky-200 p-4 rounded-md'>
          <h2 className='text-xl text-sky-600 font-bold'>{title}</h2>
          <p className='text-sky-600'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default TaskPage

function Input(props) {
  return (
    <input
      className='border border-sky-400 outline-sky-400 px-4 py-2 rounded-md placeholder:italic'
      {...props} //passa todas as props recebidas para o input
    />
  )
}

export default Input

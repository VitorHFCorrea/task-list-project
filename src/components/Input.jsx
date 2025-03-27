function Input(props) {
  return (
    <input
      className="border border-blue-400 outline-blue-400 px-4 py-2 rounded-md"
      {...props} //passa todas as props recebidas para o input
    />
  );
}

export default Input;

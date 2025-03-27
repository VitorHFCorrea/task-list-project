function Button(props) {
  return (
    <button className="bg-blue-400 p-2 rounded-md text-white" {...props}>
      {props.children}
    </button>
  );
  //children é o conteúdo de dentro do componente
}
export default Button;

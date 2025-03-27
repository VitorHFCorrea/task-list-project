import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-5 p-6 bg-blue-200 rounded-md shadow flex flex-col">
      <div className="flex flex-col space-y-2">
        <Input
          type="text"
          placeholder="Qual sua próxima tarefa?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          type="text"
          placeholder="O que você fará nessa tarefa?"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Preencha todos os campos!");
          onAddTaskSubmit(title, description), setTitle(""), setDescription("");
        }}
        className="bg-blue-500 text-white font-medium py-2 rounded-md"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;

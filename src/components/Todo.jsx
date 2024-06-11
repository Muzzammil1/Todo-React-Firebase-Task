import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'
import { AiOutlineEdit } from 'react-icons/ai'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const style = {
  li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
  liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
  row: `flex`,
  text: `ml-2 cursor-pointer flex items-center`
}
const Todo = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [editMode, setEditMode] = useState(false);
  const [editInput, setEditInput] = useState(todo.text);

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    editTodo(todo.id, editInput);
    setEditMode(false);
  };
  return (

    <li className={todo.completed ? style.liComplete : style.li}>
      <div className={style.row}>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.completed ? 'checked' : ''}
        />
        {editMode ? (
          <input
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
            className={style.input}
            type="text"
          />
        ) : (
          <p
            onClick={() => toggleComplete(todo)}
            className={todo.completed ? style.textComplete : style.text}
          >
            {todo.text}
          </p>
        )}
      </div>

      {editMode ? (
        <button onClick={handleSave}>Save</button>
      ) : (
        <button onClick={handleEdit}>
          <AiOutlineEdit />
        </button>
      )}
      <button onClick={() => deleteTodo(todo.id)}>
        <FaRegTrashAlt />
      </button>
    </li>
  )
}

export default Todo

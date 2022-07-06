import React, { FC, useEffect, useState } from 'react';
import {ITodo} from '../../types/Interface'
import TodoItem from '../TodoItem/TodoItem';
import style from "./style.module.css";

const TodoForm: FC = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [todos, setNewTodos] = useState<ITodo[]>([])
  const [idCompanent, setIdCompanent] = useState<number>()
  

  useEffect(() => {
    if (idCompanent !== null && idCompanent !== undefined) {
      setNewTodos(todos.filter((todo) => todo.id !== idCompanent))
      console.log(todos, idCompanent);
      
    }
  }, [idCompanent])
  
  
  


  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    todos.push({
      id: todos.length, 
      task: inputValue,
      completed: false
    })
    setInputValue('')
  }

  return (
    <div className={style.container}>
    <form
      className={style.mainBox}
      onSubmit={(e) => submitHandler(e)}
    >
        <input
          className={style.input}
          type='text'
          placeholder='What needs to be done?'
          onChange={(e) => changeHandler(e)}
          value={inputValue}
        />
        <button 
          type="submit"
          className={style.btn}
          >
          Add
        </button>
      </form>
      {todos?.map((todo) => 
        <TodoItem key={todo.id} todo={todo} setIdCompanent={setIdCompanent}/>
      )}
    </div>
  );
};

export default TodoForm;

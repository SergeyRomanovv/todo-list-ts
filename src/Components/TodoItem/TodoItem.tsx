import React, { FC, useState } from 'react';
import { ITodo } from '../../types/Interface';
import style from "./style.module.css";

export interface ItemProps {
  todo: ITodo;
  setIdCompanent: (id:number) => void;
}


const TodoItem: FC<ItemProps> = ({ todo, setIdCompanent}) => {
  const [input, setInput] = useState<string>(todo.task)
  const [checkbox, setСheckbox] = useState<boolean>(todo.completed)
  const [editBtnState, setEditBtnState] = useState<boolean>(false);

  const renderEditFormHandler = (): void => {
    setEditBtnState(!editBtnState);
  };

  const check = (checkboxStatus: boolean): string => {

    const falseClass = style.title;
    const trueClass = style.titleDone;
    return checkbox ? trueClass : falseClass;
  };

  const editHandler = (input: string): void => {
    todo.task = input;
    setEditBtnState(!editBtnState);
  };

  const checkBoxHandler = (): void => {
    setСheckbox(!checkbox)
  };

  const deleteHandler = () => {
    if (todo.id !== null) {
      setIdCompanent(todo.id)
      
    }
  };




  return (
    <div className={style.taskBox} key={todo.id}>
      <div className={style.formCheck}>
        {editBtnState ? (
          <input
            className={style.editInput}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        ) : (
          <div className={check(checkbox)}>{todo.task}</div>
        )}

        <div className={style.btnBox}>
          <input
            className={style.formCheckInput}
            type="checkbox"
            id="flexCheckChecked"
            defaultChecked={checkbox}
            onClick={checkBoxHandler}
          />

          {editBtnState ? (
            <button
              className={style.editBtn}
              type="button"
              onClick={() => editHandler(input)}>
              SAVE
            </button>
          ) : (
            <div onClick={renderEditFormHandler} className={style.edButton}>
              EDIT
            </div>
          )}

          <div className={style.delButton} onClick={deleteHandler}>
            DELETE
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;

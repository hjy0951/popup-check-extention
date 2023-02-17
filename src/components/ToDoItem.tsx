import React, { ChangeEvent, ReactComponentElement, useRef } from 'react';
import { ToDoProps } from '../types/interfaces';

const ToDoItem = (props: ToDoProps) => {
  const { key, contentText, isLast, onRemove } = props;
  console.log(isLast);

  const changeCheckState = (event: ChangeEvent<HTMLInputElement>) => {
    const todoText = document.getElementById(`todo-text-${key}`);
    if (todoText === null) return;

    if (todoText.classList.contains('line-through') === false) {
      todoText.classList.add('line-through');
    } else {
      todoText.classList.remove('line-through');
    }
  };

  return (
    <div key={key} className={'group py-1 flex gap-1.5 items-center'}>
      <input type="checkbox" onChange={changeCheckState} />
      <span id={`todo-text-${key}`} className="break-all">
        {contentText}
      </span>
      <button
        className="w-4 h-4 invisible group-hover:visible border border-blue-500 rounded-md"
        onClick={() => onRemove(key)}
      >
        d
      </button>
    </div>
  );
};

export default ToDoItem;

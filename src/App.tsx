import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from 'react';
import ToDoItem from './components/ToDoItem';
import { ToDoItemData } from './types/interfaces';

function App() {
  const [checkList, setCheckList] = useState<ToDoItemData[]>([]);
  const textRef = useRef('');

  const enrollItem = () => {
    if (textRef.current.length === 0) return;

    setCheckList([...checkList, { key: Date.now(), text: textRef.current }]);
    textRef.current = '';
    const todoInput = document.getElementById('todo-input') as HTMLInputElement;
    todoInput.value = '';
  };

  const changeToDoText = (event: ChangeEvent<HTMLInputElement>) => {
    textRef.current = event.target.value;
  };

  const onEnterKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      enrollItem();
    }
  };

  const removeItem = (key: number) => {
    const tempList = [...checkList];

    setCheckList(
      tempList.filter((item) => {
        if (item.key !== key) {
          return true;
        }
      })
    );
  };

  return (
    <div className="App w-60 flex flex-col p-2">
      <div className="navigation-bar border-b border-gray pb-1">Pop & Check</div>
      <div className="check-list flex flex-col my-2 text-xs">
        {checkList.length === 0 ? (
          <span>오늘 할 일을 등록해주세요!</span>
        ) : (
          checkList.map((item, index) =>
            ToDoItem({
              key: item.key,
              contentText: item.text,
              isLast: index === checkList.length - 1 ? true : false,
              onRemove: removeItem,
            })
          )
        )}
      </div>
      <div className="footer-bar border-t border-gray">
        <div className="pt-1 mt-1 flex justify-center space-x-1">
          <input
            type="text"
            placeholder="할 일을 적고, Enter를 눌러주세요."
            onChange={changeToDoText}
            onKeyUp={onEnterKeyUp}
            id="todo-input"
            className="w-48 text-xs border border-blue-500 p-0.5 rounded-md"
          />
          <button className="border bg-blue-500 w-6 rounded-md" onClick={enrollItem}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

const ToDoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [isFiltered, setIsFiltered] = useState("All");

  function addTask() {
    if (inputValue !== "") {
      setTask([...task, { text: inputValue, isChecked: false }]);
      setInputValue("");
    } else {
      alert("할 일을 입력해주세요.");
    }
  }

  function handleCheck(index) {
    setTask(
      task.map((item, i) =>
        i === index ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  }

  const filteredTasks = task.filter((item) => {
    if (isFiltered === "All") return true;
    if (isFiltered === "Done") return item.isChecked;
    if (isFiltered === "Not Done") return !item.isChecked;
  });

  return (
    <div className="toDoList">
      <div className="toDoList__container">
        <div className="toDoList__container__box">
          <div className="toDoList__container__box__header">
            <span className="toDoList__container__box__header_title">
              <span className="toDoList__container__box__header_title_point">
                <a href="https://github.com/Hyun-EG" target="blank">
                  박성현
                </a>
              </span>
              님의 투두리스트
            </span>
            <div className="toDoList__container__box__header__inputArea">
              <input
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
                className="toDoList__container__box__header__inputArea_input"
                type="text"
                placeholder="할 일을 입력해주세요."
                value={inputValue}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTask();
                  }
                }}
              />
              <button
                onClick={addTask}
                className="toDoList__container__box__header__inputArea_btn"
              >
                추가
              </button>
            </div>
            <div className="toDoList__container__box__main">
              <div className="toDoList__container__box__main__nav">
                <div
                  className="toDoList__container__box__main__nav_option"
                  onClick={() => setIsFiltered("All")}
                  style={{
                    color:
                      isFiltered === "All" ? "rgb(136, 194, 248)" : "black",
                  }}
                >
                  All
                </div>
                <div
                  className="toDoList__container__box__main__nav_option"
                  onClick={() => setIsFiltered("Not Done")}
                  style={{
                    color:
                      isFiltered === "Not Done"
                        ? "rgb(136, 194, 248)"
                        : "black",
                  }}
                >
                  Not Done
                </div>
                <div
                  className="toDoList__container__box__main__nav_option"
                  onClick={() => setIsFiltered("Done")}
                  style={{
                    color:
                      isFiltered === "Done" ? "rgb(136, 194, 248)" : "black",
                  }}
                >
                  Done
                </div>
              </div>
              <div className="toDoList__container__box__main__tasks">
                {filteredTasks.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="toDoList__container__box__main__tasks_task"
                    >
                      <div
                        style={{
                          textDecoration:
                            item.isChecked === true ? "line-through" : "none",
                        }}
                      >
                        {item.text}
                      </div>
                      <div className="toDoList__container__box__main__tasks_task_options">
                        <div
                          className="toDoList__container__box__main__tasks_task_options_option"
                          onClick={() => {
                            handleCheck(index);
                          }}
                        >
                          체크
                        </div>
                        <div
                          onClick={() => {
                            setTask(task.filter((_, i) => i !== index));
                          }}
                          className="toDoList__container__box__main__tasks_task_options_option"
                        >
                          삭제
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

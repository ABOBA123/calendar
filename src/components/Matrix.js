import React, { useEffect, useState } from "react";
import Cell from "./cell";
let months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];
const Matrix = ({ matrixDate, setMatrixDate, activeDate, setActiveDate }) => {
  const [matrix, setMatrix] = useState([]);
  const [popup, setPopup] = useState(false);
  const [popupMonth, setPopupMonth] = useState(false);
  const [popupTodo, setPopupTodo] = useState(false);
  const [year, setYear] = useState();
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { date: new Date(), name: "Купить хлеб", completed: false },
    { date: new Date(), name: "Читать книгу", completed: true },
  ]);

  const AddTodo = () => {
    if (todos != "") {
      setTodos([
        ...todos,
        { date: new Date(activeDate), name: todo, completed: false },
      ]);
      setTodo("");
    }
  };
  useEffect(() => {
    let initDate = new Date(matrixDate);
    let startDate = new Date(initDate.getFullYear(), initDate.getMonth(), 1);
    let endDate = new Date(startDate);
    let day = 1;

    let days = [];

    while (endDate.getMonth() === startDate.getMonth()) {
      endDate = new Date(endDate.getFullYear(), endDate.getMonth(), day);
      days.push(endDate);
      day += 1;
    }

    // console.log(days);

    let matrix = [];

    for (let day of days) {
      if (!matrix.length) {
        let countNull = 0;

        switch (day.getDay()) {
          case 0:
            countNull = 6;
            break;
          case 1:
            countNull = 5;
            break;
          case 2:
            countNull = 4;
            break;
          case 3:
            countNull = 3;
            break;
          case 4:
            countNull = 2;
            break;
          case 5:
            countNull = 1;
            break;
          case 6:
            countNull = 0;
            break;
        }

        let tempArr = [];
        for (let i = 0; i < countNull; i++) {
          tempArr.push(null);
        }
        matrix.push([...tempArr, day]);
        continue;
      }

      if (day.getDay() <= 6) {
        if (matrix[matrix.length - 1].length !== 7) {
          matrix[matrix.length - 1].push(day);
        } else {
          matrix.push([day]);
        }
      }
    }

    setMatrix(matrix);
  }, [matrixDate]);
  // console.log(matrix)
  return (
    <>
      <div className="calendar">
        {popupTodo && (
          <div
            className="back-popup"
            onClick={() => {
              setPopupTodo(false);
            }}
          >
            <div
              className="todo-popup"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <input
                placeholder="Введите новую заметку"
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />
              <button onClick={AddTodo}>Добавить</button>
              {todos?.length > 0 ? (
                <ul>
                  {todos.map(
                    (todo, index) =>
                      new Date(todo.date).getDate() ===
                        new Date(activeDate).getDate() &&
                      new Date(todo.date).getFullYear() ===
                        new Date(activeDate).getFullYear() &&
                      new Date(todo.date).getMonth() ===
                        new Date(activeDate).getMonth() && (
                        <li
                          key={index}
                          onClick={() => {
                            // console.log("click")

                            todos[index] = {
                              date: todo.date,
                              name: todo.name,
                              completed: !todo.completed,
                            };
                            setTodos(todos);
                          }}
                          style={{
                            textDecoration:
                              todo.completed == true ? "line-through" : null,
                          }}
                        >
                          {todo.name}
                          <button onClick={() => {
                            let arr = todos;
                            let arr2 =[];
                            for (let i of arr){
                              if(i.name==todo.name){
                                if(i.date==todo.date){
                                }
                                else{
                                  arr2.push(i)
                                }
                              }
                              else{
                                arr2.push(i)
                              }
                            }
                            console.log(arr2)
                           setTodos(arr2)
                           
                          }}>D</button>
                        </li>
                      )
                  )}
                </ul>
              ) : (
                <p>No task</p>
              )}
              {/* {todos.map && todos.length && {todos}} */}
            </div>
          </div>
        )}
        {popup && (
          <div className="back-popup">
            <div className="todo-popup"></div>
          </div>
        )}
        {popup && (
          <div
            className="back-popup"
            onClick={() => {
              setPopup(false);
            }}
          >
            <div
              className="popup"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <input
                placeholder="Введите год"
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(year, matrixDate.getMonth(), matrixDate.getDay())
                  );
                }}
              >
                Подтвердить
              </button>
            </div>
          </div>
        )}
        {popupMonth && (
          <div
            className="back-popup"
            onClick={() => {
              setPopupMonth(false);
            }}
          >
            <div
              className="popup"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 0, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Январь
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 1, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Февраль
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 2, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Март
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 3, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Апрель
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 4, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Май
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 5, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Июнь
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 6, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Июль
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 7, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Август
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 8, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Сентябрь
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 9, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Октябрь
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 10, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Ноябрь
              </button>
              <button
                onClick={() => {
                  setMatrixDate(
                    new Date(matrixDate.getFullYear(), 11, matrixDate.getDate())
                  );
                  setPopupMonth(false);
                }}
              >
                Декабрь
              </button>
            </div>
          </div>
        )}
        <div className="fringe">
          <div
            className="btn-white cursor-p"
            onClick={() => {
              setMatrixDate(
                new Date(
                  new Date(matrixDate).getFullYear(),
                  new Date(matrixDate).getMonth() - 1,
                  1
                )
              );
            }}
          >
            {"<"}
          </div>
          <h1>Today</h1>{" "}
          <div
            className="btn-white cursor-p"
            onClick={() => {
              // setPopupMonth(true)
              setMatrixDate(
                new Date(
                  new Date(matrixDate).getFullYear(),
                  new Date(matrixDate).getMonth() + 1,
                  1
                )
              );
            }}
          >
            {">"}
          </div>
        </div>
        <h1
          className="month-size"
          onClick={() => {
            setPopupMonth(true);
          }}
        >
          {months[new Date(matrixDate).getMonth()]}
          <span
            className="color-green"
            onClick={() => {
              setPopup(true);
            }}
          >
            {new Date(matrixDate).getFullYear()}
            {/* {year} */}
          </span>
        </h1>
        <div className="columns">
          <div className="day-week">
            <div className="row">
              <p>Monday</p>
              <p>tuesday </p>
              <p>wednesday </p>
              <p>thursday </p>
              <p>friday </p>
              <p>saturday </p>
              <p>sunday</p>
            </div>
            {matrix &&
              matrix.length > 0 &&
              matrix.map(
                (row) =>
                  row &&
                  row.length > 0 && (
                    <div className="Cell-row">
                      {row.map((item) => (
                        <Cell
                          popupTodo={popupTodo}
                          setPopupTodo={setPopupTodo}
                          activeDate={activeDate}
                          setActiveDate={setActiveDate}
                        >
                          {new Date(item)}
                        </Cell>
                      ))}
                    </div>
                  )
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Matrix;

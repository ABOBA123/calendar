import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./cell";
function Cell({ children, activeDate, setActiveDate, popupTodo, setPopupTodo}) {
  useEffect(() => {
    if (children) {
      console.log(
        new Date(
          activeDate.getFullYear(),
          activeDate.getMonth(),
          activeDate.getDate()
        ),
        new Date(
          new Date(children).getFullYear(),
          new Date(children).getMonth(),
          new Date(children).getDate()
        )
      );
    }
  }, [children]);

  return (
    <div>
      <div
        className="cell"
        style={{
          border:
            new Date(
              activeDate.getFullYear(),
              activeDate.getMonth(),
              activeDate.getDate()
            ).getTime() ==
            new Date(
              new Date(children).getFullYear(),
              new Date(children).getMonth(),
              new Date(children).getDate()
            ).getTime()
              ? " 2px solid red"
              : new Date().getDate()==new Date(children).getDate() ?"2px solid green":"1px solid aliceblue",
        }}
        onClick={() =>{setActiveDate(children);setPopupTodo(true) }}
      >
        {new Date(children).getDate()}
      </div>
    </div>
  );
}
export default Cell;

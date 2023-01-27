import React, { useEffect, useState } from "react";
import Cell from "./cell";

const Matrix = ({ matrixDate, setMatrixDate }) => {
  const [matrix, setMatrix] = useState([]);

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

  return (
    <>
      <div className='calendar'>
        <div className='fringe'>
          <div
            className='btn-white cursor-p'
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
          <h1>Today</h1>
          <div className='btn-white cursor-p'>{">"}</div>
        </div>
        <h1 className='month-size'>
          August <span className='color-green'>2019</span>
        </h1>
        <div className='columns'>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
          <div className='day-week'>
            <p>Monday</p>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
          </div>
        </div>
      </div>
    </>
  );
};

export default Matrix;

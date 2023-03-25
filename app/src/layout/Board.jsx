import React, { useState, useEffect, useRef } from "react";
import Cell from "../components/Cell";
export const Board = () => {
  /**
   * create cell component
   *
   * get size of board
   *  find property that will give me that info
   *
   * add cells to fill up board
   *
   *
   * !! Review grid
   *
   */

  const [size, setSize] = useState({
    height: 0,
    width: 0,
  });
  let boardSize = useRef(null);

  useEffect(() => {
    setSize({
      height: boardSize.current.clientHeight - 100,
      width: boardSize.current.clientWidth - 100,
    });
  }, []);

  return (
    <div
      onClick={() => console.log((size.height * size.width) / 2500)}
      ref={boardSize}
      className="board"
    >
      {size.height > 0
        ? new Array(Math.floor(size.height / 25)).fill(null).map((_, i) => {
            return (
              <div className="row" key={i}>
                {new Array(Math.floor(size.width / 25))
                  .fill(null)
                  .map((_, i) => {
                    return <Cell key={i} />;
                  })}
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Board;

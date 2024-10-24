import React, { useState } from "react";
import "../Board/Board.css";
import Popup from "../Popup/Popup";
import Card from "../Card/Card";

function Board() {
  const [showPopup, setShowPopup] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handlePopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const addTaskToBoard = (task) => {
    const newTask = { text: task, isDeleted: false };
    setTasks([...tasks, newTask]);
    closePopup();
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    const confirm = window.confirm("Are you sure of deleteing this task ?");
    if (confirm) {
      setTasks(updatedTasks);
    }
  };

  const handletaskdone = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDeleted: !task.isDeleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="Board_Container">
      <div className="Inside_Container">
        <h1 id="Header">To Do List</h1>
        <button id="Add_task" onClick={handlePopup}>
          Add
        </button>

        <div className="tasks">
          {tasks.map((task, index) => (
            <Card
              key={index}
              task={task}
              index={index}
              handleDeleteTask={handleDeleteTask}
              handletaskdone={handletaskdone}
            />
          ))}
        </div>
      </div>

      {showPopup && (
        <Popup addTaskToBoard={addTaskToBoard} closePopup={closePopup} />
      )}
    </div>
  );
}

export default Board;

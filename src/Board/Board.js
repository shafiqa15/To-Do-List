import React, { useState } from "react";
import "../Board/Board.css";
import Popup from "../Popup/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

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
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDeleted: true } : task
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
            <div
              key={index}
              className={`task ${task.isDeleted ? "deleted" : ""}`}
            >
              <p>
                Task {index + 1}: {task.text}
              </p>
              <button
                id="delete_button"
                onClick={() => handleDeleteTask(index)}
              >
                Delete <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
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

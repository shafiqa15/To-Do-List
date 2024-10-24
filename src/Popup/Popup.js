import React, { useState } from "react";
import "../Popup/Popup.css";

function Popup({ addTaskToBoard, closePopup }) {
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== "") {
      addTaskToBoard(task);
      setTask("");
    }
  };

  return (
    <div className="Big_Pop_Container">
      <div className="Pop_Container">
        <h1>Write The Task You Want to Add</h1>
        <textarea
          className="text_cont"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter your task here"
        ></textarea>
        <div>
          <button id="add_to_board" onClick={handleAddTask}>
            Add to Board
          </button>
          <button id="cancel" onClick={closePopup}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;

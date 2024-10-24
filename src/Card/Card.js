import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../Board/Board.css";

const Card = ({ task, index, handleDeleteTask, handletaskdone }) => {
  return (
    <div className={`task ${task.isDeleted ? "deleted" : ""}`}>
      <p style={{ textDecoration: task.isDeleted ? "line-through" : "none" }}>
        Task {index + 1}: {task.text}
      </p>
      <div className="button-container">
        <button id="delete_button" onClick={() => handleDeleteTask(index)}>
          Delete <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button id="delete_button2" onClick={() => handletaskdone(index)}>
          Done <FontAwesomeIcon icon={faCheck} />
        </button>
      </div>
    </div>
  );
};

export default Card;

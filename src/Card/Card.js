import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "../Board/Board.css";

const Card = ({ task, index, handleDeleteTask }) => {
  return (
    <div className={`task ${task.isDeleted ? "deleted" : ""}`}>
      <p>
        Task {index + 1}: {task.text}
      </p>
      <button id="delete_button" onClick={() => handleDeleteTask(index)}>
        Delete <FontAwesomeIcon icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default Card;

import React from "react";
import "./GoalItem.module.css";

const GoalItem = (props) => {
  const deleteHandler = () => {
    props.onDelete(props.id);
  };
  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};
export default GoalItem;

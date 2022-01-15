import React from "react";
import GoalItem from "../GoalItem/GoalItem";
import "./GoalList.module.css";

const GoalList = (props) => {
  <ul className="goal-list">
    {props.items.map((goal) => (
      <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
        {goal.text}
      </GoalItem>
    ))}
  </ul>;
};
export  default GoalList;
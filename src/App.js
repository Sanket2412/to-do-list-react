import React, { Fragment, useState } from "react";
import GoalList from "./components/Goals/GoalList/GoalList";
import GoalInput from "./components/Goals/GoalInput/GoalInput";
import './App.css';

const App = () => {
  const [toDoGoals, setToDoGoals] = useState([
    { text: "Learn React", id: "g1" },
    { text: "Implement React", id: "g2" },
  ]);
  const addGoalHandler = (enteredText) => {
    setToDoGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };
  return (
    <div className="goals">
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
    </div>
  );
};
export default App;
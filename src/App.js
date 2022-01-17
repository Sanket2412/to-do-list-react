import React, { useState } from "react";
import GoalList from "./components/Goals/GoalList/GoalList";
import GoalInput from "./components/Goals/GoalInput/GoalInput";
import "./App.css";

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
  const deleteItemHandler = (goalId) => {
    setToDoGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };
  let content = (
    <p style={{ textAlign: "center" }}>No Goals Found. Maybe add one?</p>
  );
  if (toDoGoals.length > 0) {
    content = <GoalList items={toDoGoals} onDeleteItem={deleteItemHandler} />;
  }
  return (
    <div>
      <section id="goal-form">
        <GoalInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">{content}</section>
    </div>
  );
};
export default App;

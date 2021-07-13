import React from "react";
import { Task } from "./components/task/task";
import { Container } from "./components/continer/container";

const schedule = [
  {
    title: "Read Harry Potter",
    date: { year: 2021, month: 1, day: 1 },
    startingTime: "19:00",
    endingTime: "20:00",
  },
  {
    title: "Sleep",
    date: { year: 2021, month: 1, day: 2 },
    startingTime: "10:00",
    endingTime: "12:00",
  },
  {
    title: "Drink Coffee",
    date: { year: 2021, month: 1, day: 3 },
    startingTime: "14:00",
    endingTime: "15:30",
  },
  {
    title: "Eat Mango",
    date: { year: 2021, month: 1, day: 4 },
    startingTime: "17:00",
    endingTime: "18:00",
  },
];

const App = () => {
  return <Container schedule={schedule} />;
};

export default App;

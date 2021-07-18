import React from "react";
import styles from './App.module.css'
import { SelectedTaskContextProvider } from "./components/context/selectedTaskContext";
import { ViewTypeContextProvider } from "./components/context/viewTypeContext";
import { Container } from "./components/continer/container";
import { Dropdown } from "./components/dropdown/dropdown";
import { SideBar } from "./components/sidebar/sidebar";

const tasks = [{"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "10:20", "endingTime": "12:6", "color": "#ff959d", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "13:5", "endingTime": "15:31", "color": "#c51162", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "17:17", "endingTime": "18:15", "color": "#81deea", "status": "Done"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 15}, "startingTime": "10:40", "endingTime": "12:49", "color": "#81deea", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 15}, "startingTime": "14:42", "endingTime": "15:33", "color": "#c51162", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 15}, "startingTime": "16:57", "endingTime": "18:34", "color": "#ff4350", "status": "Done"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 14}, "startingTime": "9:57", "endingTime": "11:37", "color": "#33364c", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 14}, "startingTime": "14:5", "endingTime": "15:34", "color": "#33364c", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 8}, "startingTime": "10:12", "endingTime": "13:20", "color": "#c51162", "status": "Done"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 8}, "startingTime": "14:30", "endingTime": "17:27", "color": "#ff4350", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 1}, "startingTime": "11:39", "endingTime": "12:12", "color": "#ff4350", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 1}, "startingTime": "13:41", "endingTime": "14:29", "color": "#01acc2", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 1}, "startingTime": "15:57", "endingTime": "17:30", "color": "#727689", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 20}, "startingTime": "11:20", "endingTime": "13:0", "color": "#81deea", "status": "Done"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "9:33", "endingTime": "10:51", "color": "#ff4350", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "11:43", "endingTime": "13:49", "color": "#33364c", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "14:44", "endingTime": "15:53", "color": "#33364c", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "16:35", "endingTime": "19:22", "color": "#ff959d", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 18}, "startingTime": "10:18", "endingTime": "11:52", "color": "#33364c", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 18}, "startingTime": "12:2", "endingTime": "14:17", "color": "#f06292", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 18}, "startingTime": "16:58", "endingTime": "19:43", "color": "#01acc2", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 16}, "startingTime": "9:21", "endingTime": "11:53", "color": "#ff4350", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 16}, "startingTime": "13:36", "endingTime": "16:2", "color": "#ff4350", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 22}, "startingTime": "10:29", "endingTime": "13:43", "color": "#ffd78c", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 21}, "startingTime": "12:31", "endingTime": "14:52", "color": "#33364c", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 21}, "startingTime": "15:58", "endingTime": "19:22", "color": "#ffd78c", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 25}, "startingTime": "9:31", "endingTime": "11:47", "color": "#01acc2", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 25}, "startingTime": "12:39", "endingTime": "13:44", "color": "#01acc2", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 25}, "startingTime": "14:16", "endingTime": "16:48", "color": "#01acc2", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 25}, "startingTime": "17:8", "endingTime": "19:50", "color": "#c51162", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 9}, "startingTime": "9:10", "endingTime": "11:52", "color": "#01acc2", "status": "Done"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 6}, "startingTime": "15:28", "endingTime": "17:29", "color": "#ff4350", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 17}, "startingTime": "10:46", "endingTime": "15:8", "color": "#33364c", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 17}, "startingTime": "16:49", "endingTime": "18:4", "color": "#ff959d", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "9:42", "endingTime": "11:1", "color": "#f06292", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "14:45", "endingTime": "15:57", "color": "#ff4350", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "16:23", "endingTime": "17:39", "color": "#f06292", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "18:3", "endingTime": "19:26", "color": "#c51162", "status": "Pending"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "10:11", "endingTime": "12:39", "color": "#01acc2", "status": "Failed"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "13:36", "endingTime": "14:28", "color": "#ff959d", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "15:37", "endingTime": "17:47", "color": "#f06292", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "18:46", "endingTime": "19:8", "color": "#ffd78c", "status": "Upcoming"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 13}, "startingTime": "10:10", "endingTime": "16:54", "color": "#c51162", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 4}, "startingTime": "9:42", "endingTime": "12:49", "color": "#c51162", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 4}, "startingTime": "13:58", "endingTime": "19:27", "color": "#01acc2", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 23}, "startingTime": "9:3", "endingTime": "11:57", "color": "#ff959d", "status": "Cancelled"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 23}, "startingTime": "12:8", "endingTime": "15:31", "color": "#f06292", "status": "InProgress"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 23}, "startingTime": "17:55", "endingTime": "18:41", "color": "#33364c", "status": "Cancelled"}]


const CONTAINER_HEIGHT =  parseInt(window.innerHeight / 1) - 100;
const CONTAINER_WIDTH = parseInt(window.innerWidth*.75);
const SIDEBAR_HEIGHT = parseInt(window.innerHeight)
const SIDEBAR_WIDTH = parseInt(window.innerWidth*.25)



const App = () => {
  return <ViewTypeContextProvider>
    <SelectedTaskContextProvider>
      <div className={styles.app}>
        <SideBar/>
        <Dropdown/>
        <Container
          tasks={tasks}
          containerHeight={CONTAINER_HEIGHT}
          containerWidth={CONTAINER_WIDTH}
          />
      </div>
    </SelectedTaskContextProvider>
  </ViewTypeContextProvider>
};

export default App;

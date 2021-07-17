import React from "react";
import styles from './App.module.css'
import { Container } from "./components/continer/container";
import { ViewTypeContextProvider } from "./components/context/viewTypeContext";
import { Dropdown } from "./components/dropdown/dropdown";
import { SideBar } from "./components/sidebar/sidebar";

const tasks = [{"title": "task", "date": {"year": 2021, "month": 1, "day": 3}, "startingTime": "10:18", "endingTime": "11:16", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 3}, "startingTime": "12:35", "endingTime": "13:47", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 3}, "startingTime": "14:57", "endingTime": "17:34", "color": "#ff959d"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 3}, "startingTime": "18:56", "endingTime": "19:42", "color": "#727689"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 25}, "startingTime": "9:54", "endingTime": "12:11", "color": "#01acc2"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 6}, "startingTime": "10:0", "endingTime": "12:34", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 6}, "startingTime": "13:38", "endingTime": "17:43", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 6}, "startingTime": "18:40", "endingTime": "19:56", "color": "#f06292"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 4}, "startingTime": "9:38", "endingTime": "13:8", "color": "#f06292"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 24}, "startingTime": "10:37", "endingTime": "11:40", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 24}, "startingTime": "14:44", "endingTime": "17:14", "color": "#ff959d"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "9:44", "endingTime": "10:15", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "11:30", "endingTime": "12:36", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "16:0", "endingTime": "17:43", "color": "#ff959d"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 11}, "startingTime": "18:19", "endingTime": "19:52", "color": "#ffd78c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 13}, "startingTime": "10:33", "endingTime": "11:43", "color": "#01acc2"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 13}, "startingTime": "12:26", "endingTime": "13:57", "color": "#727689"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 13}, "startingTime": "14:41", "endingTime": "16:50", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 13}, "startingTime": "17:40", "endingTime": "19:56", "color": "#ff959d"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "15:49", "endingTime": "16:54", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 12}, "startingTime": "18:36", "endingTime": "19:37", "color": "#01acc2"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 10}, "startingTime": "10:53", "endingTime": "11:20", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 10}, "startingTime": "12:38", "endingTime": "13:24", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 10}, "startingTime": "14:19", "endingTime": "16:14", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 10}, "startingTime": "17:52", "endingTime": "18:23", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 17}, "startingTime": "9:38", "endingTime": "12:15", "color": "#81deea"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 17}, "startingTime": "13:31", "endingTime": "15:27", "color": "#f06292"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 17}, "startingTime": "17:37", "endingTime": "19:13", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 1}, "startingTime": "9:14", "endingTime": "11:21", "color": "#81deea"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 1}, "startingTime": "13:49", "endingTime": "19:42", "color": "#ffd78c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "9:55", "endingTime": "13:10", "color": "#ffd78c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 2}, "startingTime": "15:35", "endingTime": "19:51", "color": "#727689"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 23}, "startingTime": "9:41", "endingTime": "11:8", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 23}, "startingTime": "14:35", "endingTime": "15:53", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 7}, "startingTime": "10:9", "endingTime": "11:57", "color": "#ff959d"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 7}, "startingTime": "13:46", "endingTime": "15:29", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 7}, "startingTime": "17:21", "endingTime": "19:33", "color": "#f06292"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 5}, "startingTime": "9:46", "endingTime": "13:1", "color": "#01acc2"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 5}, "startingTime": "14:10", "endingTime": "15:21", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 5}, "startingTime": "16:29", "endingTime": "18:54", "color": "#c51162"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 20}, "startingTime": "10:50", "endingTime": "17:32", "color": "#33364c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 20}, "startingTime": "18:36", "endingTime": "19:10", "color": "#81deea"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 9}, "startingTime": "10:10", "endingTime": "11:18", "color": "#01acc2"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 9}, "startingTime": "13:0", "endingTime": "15:52", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 9}, "startingTime": "16:9", "endingTime": "17:28", "color": "#ffd78c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "13:21", "endingTime": "15:10", "color": "#ff4350"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 27}, "startingTime": "17:27", "endingTime": "18:19", "color": "#727689"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 19}, "startingTime": "12:27", "endingTime": "16:42", "color": "#ffd78c"}, {"title": "task", "date": {"year": 2021, "month": 1, "day": 18}, "startingTime": "10:43", "endingTime": "15:17", "color": "#33364c"}
]

const CONTAINER_HEIGHT =  parseInt(window.innerHeight / 1) - 100;
const CONTAINER_WIDTH = parseInt(window.innerWidth*.75);
const SIDEBAR_HEIGHT = parseInt(window.innerHeight)
const SIDEBAR_WIDTH = parseInt(window.innerWidth*.25)



const App = () => {
  return <ViewTypeContextProvider>
    <div className={styles.app}>
      <SideBar/>
      <Dropdown/>
      <Container
        tasks={tasks}
        containerHeight={CONTAINER_HEIGHT}
        containerWidth={CONTAINER_WIDTH}
        />
    </div>
  </ViewTypeContextProvider>
};

export default App;

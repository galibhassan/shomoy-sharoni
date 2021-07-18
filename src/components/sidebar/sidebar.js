import styles from './sidebar.module.css'
import { TaskDetail } from "../taskDetail/taskDetail";
import { useContext } from 'react';
import { SelectedTaskContext } from '../context/selectedTaskContext';

export const SideBar = (props) => {
  const selectedTaskCtx = useContext(SelectedTaskContext)
  return(
    <div className={styles.sidebar}>
      <div>logo</div>
      <TaskDetail 
        {...selectedTaskCtx.selectedTask}
      />
    </div>
  )
};

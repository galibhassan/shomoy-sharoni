import { useState } from 'react'
import { Task } from '../task/task'
import styles from './container.module.css'

const Container = (props) => {
  const [viewType, setViewType] = useState('monthh')
  const { schedule: tasks } = props
  const containerHeight = 300
  const containerWidth = 600

  const renderTasks = () => {
    return tasks.map((task, i) => {
      const { startingTime, endingTime, title } = task
      return (
        <Task
          startingTime={startingTime}
          endingTime={endingTime}
          title={title}
          containerHeight={containerHeight}
          containerWidth = {containerWidth}
          viewType={viewType}
          key={i}
        />
      )
    })
  }

  return (
    <div className={styles.container} style={{
      height: containerHeight,
      width: containerWidth
    }}>
      {renderTasks()}
    </div>
  )
}

export { Container }

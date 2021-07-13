import React, { useState } from 'react'
import styles from './task.module.css'
import { BIG_BANG, BIG_CRUNCH } from '../../constants'
import { getTaskDivHeightWidthTop } from '../../utils/taskUtils'



const Task = (props) => {
  const { startingTime, endingTime, title, containerHeight, containerWidth, viewType } = props
  const { taskHeight, taskWidth, taskPositionTop } = getTaskDivHeightWidthTop({
    startingTime,
    endingTime,
    containerHeight,
    containerWidth,
    viewType,
    BIG_BANG,
    BIG_CRUNCH
  })

  return (
    <div className={styles.task} style={{
      height: taskHeight,
      width: taskWidth,
      top: taskPositionTop
    }}>

    </div>
  )
}

export { Task };
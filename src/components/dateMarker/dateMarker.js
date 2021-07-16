import styles from './dateMarker.module.css'

export const DateMarker = (props) => {
  const {viewType, positionTop, containerWidth} = props

  const getHorizSegmentsCount = ()=>{
    if(viewType==='week') return 7;
    else if(viewType==='twoWeeks') return 7*2;
    else if(viewType==='threeWeeks') return 7*3;
    else return 0    
  }

  const renderHorizSegmentDivs = () => {
    const divCount = getHorizSegmentsCount()
    const divs = []
    for (let i=0; i<divCount; i++) {
      divs.push(
        <div
          key={i}
          style={{
            width:containerWidth/divCount,
            backgroundColor: 'skyblue',
          }}
        >
          Horiz {i+1}
        </div>
      )
    }
    return divs
  }

  return (
    <div 
      className={styles.dateMarkerContainer}
      style={{
        top: positionTop,
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      {renderHorizSegmentDivs()}
    </div>
  )
}
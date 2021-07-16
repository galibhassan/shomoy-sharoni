import styles from './dateMarker.module.css'

export const DateMarker = (props) => {
  const {viewType, positionTop, containerWidth, horizSegmentCount} = props

  const getHorizSegmentsCount = ()=>{
    if(viewType==='week') return 7;
    else if(viewType==='twoWeeks') return 7*2;
    else if(viewType==='threeWeeks') return 7*3;
    else return 0    
  }

  const renderHorizSegmentDivs = () => {
    const divCount = getHorizSegmentsCount()
    const divs = []
    for (let i=0; i<horizSegmentCount; i++) {
      divs.push(
        <div
          key={i}
          style={{
            width:containerWidth/divCount,
            backgroundColor: 'skyblue',
            boxShadow: "1px 1px 10px 1px rgba(0,0,0,0.3)"
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
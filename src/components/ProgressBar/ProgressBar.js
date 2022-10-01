import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledProgressBar, Progression, ProgressBox } from './ProgressBar.styled'

const ProgressBar = (props) => {
  const [actualWidth, setWidth] = useState(0)
  useEffect(() => {
    setInterval(() => {
      setWidth((actualWidth) => Number(actualWidth) + 1)
    }, 50)
  }, [])

  const percentage = Math.floor((actualWidth * 100) / 600) + '%' // 600 - width of the progressBar

  return (
    <StyledProgressBar style={props.style}>
      <Progression width={`${actualWidth}px`}/>
      <ProgressBox width={`${actualWidth}`}>{percentage}</ProgressBox>
    </StyledProgressBar>
  )
}

ProgressBar.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object
}

export default ProgressBar

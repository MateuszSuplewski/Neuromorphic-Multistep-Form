import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { StyledProgressBar, Progression, ProgressBox } from './ProgressBar.styled'

const ProgressBar = (props) => {
  const { completed, maxRequired } = props
  const percentageNumber = Math.floor((completed * 100) / maxRequired)
  const progressBarEl = useRef(null)

  return (
    <StyledProgressBar
      style={props.style}
      ref={progressBarEl}
    >
      <Progression
        width={`${(completed / maxRequired) * 100}%`}
      />
      <ProgressBox width={progressBarEl.current && (completed / maxRequired) * progressBarEl.current.offsetWidth}>{percentageNumber + '%'}</ProgressBox>
    </StyledProgressBar>
  )
}

ProgressBar.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  completed: PropTypes.number,
  maxRequired: PropTypes.number
}

export default ProgressBar

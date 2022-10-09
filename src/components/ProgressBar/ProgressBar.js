import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { StyledProgressBar, Progression, ProgressBox } from './ProgressBar.styled'

const ProgressBar = (props) => {
  const { completedRequiredFields, requiredFields, style } = props
  const percentageOfCompletedFields = Math.floor((completedRequiredFields * 100) / requiredFields)
  const progressBarEl = useRef(null)
  const ActualWidthOfProgression = progressBarEl.current && (completedRequiredFields / requiredFields) * progressBarEl.current.offsetWidth

  return (
    <StyledProgressBar
      style={style}
      ref={progressBarEl}
    >
      <Progression width={percentageOfCompletedFields}/>
      <ProgressBox width={ActualWidthOfProgression}>
        {`${percentageOfCompletedFields}%`}
      </ProgressBox>
    </StyledProgressBar>
  )
}

ProgressBar.propTypes = {
  style: PropTypes.object,
  completedRequiredFields: PropTypes.number,
  requiredFields: PropTypes.number
}

export default ProgressBar

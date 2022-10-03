import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSelect, OptionsList, Option, SelectIcon } from './Select.styled'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

const Select = (props) => {
  const [selected, setSelected] = useState(props.startValue)
  const [isListActive, setListActivity] = useState(false)

  useEffect(() => {
    setListActivity(false)
  }, [selected])

  return (
    <StyledSelect
      style={props.style}
      $isListActive={isListActive}
      onClick={() => setListActivity((status) => setListActivity(!status))}
    >
      {selected}
      <SelectIcon
        icon={faAngleRight}
        $isListActive={isListActive}
      />
      {
        isListActive && (
          <OptionsList $isListActive={isListActive}>
            {
              props.optionsList.map((option, index) => (
                <Option
                  key={index}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </Option>
              ))
            }
          </OptionsList>
        )
      }
    </StyledSelect>
  )
}

Select.propTypes = {
  optionsList: PropTypes.arrayOf(PropTypes.string),
  startValue: PropTypes.string,
  children: PropTypes.node,
  style: PropTypes.object
}

export default Select

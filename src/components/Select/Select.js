import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { StyledSelect, OptionsList, Option, SelectIcon } from './Select.styled'

const Select = ({ optionsList, startValue = 'Select', style, changeOption, name, selectIcon, value }) => {
  const [selected, setSelected] = useState(value || startValue)
  const [isListActive, toggleListActivity] = useState(false)

  useEffect(() => {
    toggleListActivity(false)
    if (selected !== startValue) changeOption(selected, name)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected])

  return (
    <StyledSelect
      style={style}
      $isListActive={isListActive}
      onClick={() => toggleListActivity((status) => !status)}
      isIconSelected={selectIcon}
    >
      {selected}
      {
        selectIcon && (
          <SelectIcon
            icon={selectIcon}
            $isListActive={isListActive}
          />
        )
      }
      {
        isListActive && (
          <OptionsList $isListActive={isListActive}>
            {
              optionsList.map((option, index) => (
                <Option
                  key={index}
                  onClick={() => { setSelected(option) }}
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
  optionsList: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeOption: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  startValue: PropTypes.string,
  style: PropTypes.object,
  selectIcon: PropTypes.object,
  value: PropTypes.string
}

export default Select

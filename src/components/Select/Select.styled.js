import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const DefaultStyledSelect = styled.div`
  --primary: ${({ theme }) => theme.primaryColor};
  --primary-bg: ${({ theme }) => theme.primaryBackground};
  --decorative: ${({ theme }) => theme.decorationColor};
  --shadow-light: ${({ theme }) => theme.shadowColorLight};
  --shadow-dark: ${({ theme }) => theme.shadowColorDark};

  cursor: pointer;
  width: 130px;
  height: 35px;
  padding: 0 20px;
  margin: 12px;
  border-radius: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-sizing: border-box;
  color: var(--primary);
  background-color: var(--primary-bg);
  ${({ $isListActive }) => !$isListActive && css`
      box-shadow: 4px 4px 6px var(--shadow-dark),
        -4px -4px 6px var(--shadow-light);
    `}

  &:active {
    box-shadow: inset 2px 2px 4px var(--shadow-dark),
      inset -2px -2px 4px var(--shadow-light);
  }
`

const StyledSelect = styled(DefaultStyledSelect)(({ style }) => style)

const OptionsList = styled.ul`
  list-style: none;
  width: 100%;
  top: 0px;
  left: 0;
  margin: 0;
  padding: 30px 6px 10px 6px;
  border-radius: 22px;
  position: absolute;
  box-sizing: border-box;
  ${({ $isListActive }) => $isListActive && css`
      box-shadow: inset 2px 2px 4px var(--shadow-dark),
        inset -2px -2px 4px var(--shadow-light);
    `}
`

const Option = styled.li`
  padding: 6px 10px;
  text-align: center;
  transition: 0.3s ease;

  &:hover {
    color: var(--decorative);
    box-shadow: inset 2px 2px 4px var(--shadow-dark),
      inset -2px -2px 4px var(--shadow-light);
    border-radius: 26px;
  }

  &:first-child {
    margin-top: 10px;
  }
`

const SelectIcon = styled(FontAwesomeIcon)`
  transition: 0.3s ease;
  ${({ $isListActive }) => $isListActive && css`
      transform: rotate(90deg);
    `}
`

export { StyledSelect, OptionsList, Option, SelectIcon }

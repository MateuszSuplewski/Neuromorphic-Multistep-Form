import styled from 'styled-components'

const DefaultStyledToggler = styled.div`
  --primary-bg: ${({ theme }) => theme.primaryBackground};
  --shadow-light: ${({ theme }) => theme.shadowColorLight};
  --shadow-dark: ${({ theme }) => theme.shadowColorDark};
  --decorative: ${({ theme }) => theme.decorationColor};
  height: 30px;
  margin: 12px;
  padding-left: 30px;
  display: inline-block;
`

const StyledToggler = styled(DefaultStyledToggler)(({ style }) => style)

const Checkbox = styled.input`
  display: none;

  &:checked {
    & ~ label {
      &::before {
        background: var(--decorative);
      }
      &::after {
        left: -6px;
      }
    }
  }
`

const Switch = styled.label`
  position: relative;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 50px; // key to good positioning element with text!

  &::after {
    content: "";
    cursor: pointer;
    left: -2rem;
    width: 34px;
    height: 34px;
    position: absolute;
    border-radius: 50%;
    background: white;
    transition: all 0.4s ease;
  }

  &::before {
    content: "";
    cursor: pointer;
    left: -2rem;
    width: 60px;
    height: 30px;
    position: absolute;
    border-radius: 24px;
    background: var(--primary-bg);
    transition: all 0.4s ease;
    box-shadow: 4px 4px 6px var(--shadow-dark),
      -4px -4px 6px var(--shadow-light);
  }
`

export { StyledToggler, Checkbox, Switch }

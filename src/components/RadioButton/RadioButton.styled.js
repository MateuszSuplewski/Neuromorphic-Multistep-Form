import styled from 'styled-components'

const DefaultStyledRadioButton = styled.div`
  --primary: ${({ theme }) => theme.primaryColor};
  --primary-bg: ${({ theme }) => theme.primaryBackground};
  --decorative: ${({ theme }) => theme.decorationColor};
  --shadow-light: ${({ theme }) => theme.shadowColorLight};
  --shadow-dark: ${({ theme }) => theme.shadowColorDark};

  height: 30px;
  margin: 12px;
  padding-left: 30px;
  display: inline-block;
`

const DefaultRadio = styled.input.attrs(() => ({
  type: 'radio'
}))`
  display: none;
  &:checked {
    & ~ label::before {
      box-shadow: inset 2px 2px 4px var(--shadow-dark),
        inset -2px -2px 4px var(--shadow-light);
    }
    & ~ label::after {
      background: var(--primary);
    }
  }
`

const CustomRadio = styled.label`
  cursor: pointer;
  position: relative;
  height: 35px;
  display: flex;
  align-items: center;
  padding-left: 20px; // key to good positioning element with text!

  &::after {
    content: "";
    left: calc(-2rem + 10px);
    width: 15px;
    height: 15px;
    box-sizing: border-box;
    position: absolute;
    border-radius: 50%;
    transition: all 0.4s ease;
    border: 2px solid var(--primary);
  }

  &:before {
    content: "";
    left: -2rem;
    position: absolute;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    background: var(--primary-bg);
    box-shadow: 4px 4px 6px var(--shadow-dark),
      -4px -4px 6px var(--shadow-light);
    transition: all 0.4s ease;
  }

  &:hover {
    &::after {
      background: var(--primary);
    }
  }
`

const StyledRadioButton = styled(DefaultStyledRadioButton)(
  ({ style }) => style
)

export { StyledRadioButton, DefaultRadio, CustomRadio }

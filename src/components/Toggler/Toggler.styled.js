import styled from 'styled-components'

const DefaultStyledToggler = styled.div`
  --primary-bg: ${({ theme }) => theme.primaryBackground};
  --shadow-light: ${({ theme }) => theme.shadowColorLight};
  --shadow-dark: ${({ theme }) => theme.shadowColorDark};
  --decorative: ${({ theme }) => theme.decorationColor};
  height: 25px;
  margin: 12px;
  padding-left: 30px;
  display: inline-block;
  width: 100%;
`

const StyledToggler = styled(DefaultStyledToggler)(({ style }) => style)

const Checkbox = styled.input.attrs((props) => ({
  type: 'checkbox',
  checked: props.checked && 'checked'
}))`
  display: none;

  &:checked {
    & ~ label {
      &::before {
        background: var(--decorative);
      }
      &::after {
        left: -11px;
      }
    }
  }
`

const Switch = styled.label`
 color: var(--decorative);
  position: relative;
  height: 25px;
  display: flex;
  align-items: center;
  padding-left: 50px; // key to good positioning element with text!

  &::after {
    content: "";
    cursor: pointer;
    left: -2rem;
    width: 29px;
    height: 29px;
    position: absolute;
    border-radius: 50%;
    background: white;
    transition: all 0.4s ease;
  }

  &::before {
    content: "";
    cursor: pointer;
    left: -2rem;
    width: 50px;
    height: 25px;
    position: absolute;
    border-radius: 24px;
    background: var(--primary-bg);
    transition: all 0.4s ease;
    box-shadow: 4px 4px 6px var(--shadow-dark),
      -4px -4px 6px var(--shadow-light);
  }
`

export { StyledToggler, Checkbox, Switch }

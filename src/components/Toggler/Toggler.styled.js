import styled from 'styled-components'

const DefaultStyledToggler = styled.div`
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};
    --decorative: ${({ theme }) => theme.decorationColor};
    width: 60px;
    height: 30px;
    margin: 12px;
    display: inline-block;
`

const StyledToggler = styled(DefaultStyledToggler)(
  ({ style }) => style
)

const Checkbox = styled.input`
    display: none;

    &:checked {
        & ~ label {
          &::before { 
            opacity: 1;
          }
          &::after {
            left: 26px;
          }
        }
    }
`

const Switch = styled.label`
    cursor: pointer;
    position: relative;
    border-radius: 24px;
    width: 60px;
    height: 30px;
    display: flex;
    align-items: center;
    background: var(--primary-bg);
    box-shadow: 4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);

    &::after {
    content: "";
    width: 34px;
    height: 34px;
    left: 0;
    position: absolute;
    background: white;
    border-radius: 50%;
    transition: all .4s ease;
    }   

    &::before {
    content: "";
    width: 60px;
    height: 30px;
    position: absolute;
    border-radius: inherit;
    background: var(--decorative);
    opacity: 0;
    transition: all .4s ease;
    }
`

export { StyledToggler, Checkbox, Switch }

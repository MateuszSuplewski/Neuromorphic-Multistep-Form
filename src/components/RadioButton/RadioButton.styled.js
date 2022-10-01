import styled from 'styled-components'

const DefaultStyledRadioButton = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 30px;
    height: 30px;
    color: var(--primary);
    background-color: var(--primary-bg);
    border: none;
    margin: 12px;
    display: inline-block;
`

const DefaultRadio = styled.input`
        display: none;
     &:checked {
        & ~ label { 
          box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light)
        }
        & ~ label::after {
            background: var(--primary);
        }
      }
`

const CustomRadio = styled.label`
    cursor: pointer;
    position: relative;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--primary-bg);
    box-shadow: 4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);

    &::after {
    content: "";
    box-sizing: border-box;
    width: 15px;
    height: 15px;
    position: absolute;
    border-radius: 50%;
    transition: all .4s ease;
    border: 2px solid var(--primary);
    }

    &:hover{
        &::after{
            background: var(--primary);
        }
    } 

`

const StyledRadioButton = styled(DefaultStyledRadioButton)(
  ({ style }) => style
)

export { StyledRadioButton, DefaultRadio, CustomRadio }

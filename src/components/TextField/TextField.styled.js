import styled from 'styled-components'

const DefaultStyledTextField = styled.input`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 130px;
    height: 35px;
    padding: 3px 20px;
    margin: 12px;
    border-radius: 26px;
    text-align: center;
    font-weight: bold;
    border: none;
    outline: none;
    transition: .3s ease;
    color: var(--primary);
    background-color: var(--primary-bg);
    box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light);

    &:focus {
        box-shadow: 4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);
    }

    &::placeholder {
        color: var(--shadow-dark)
    }

`

const Label = styled.label`
    display: flex;
    align-items: center;
`

const StyledTextField = styled(DefaultStyledTextField)(
  ({ style }) => style
)

export { StyledTextField, Label }

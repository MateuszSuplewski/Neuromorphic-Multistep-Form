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
    border-radius: 26px;
    color: var(--primary);
    background-color: var(--primary-bg);
    border: none;
    box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light);
    margin: 12px;
    font-weight: bold;
    transition: .3s ease;
    outline: none;
    text-align: center;

    &:focus {
        box-shadow: 4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);
    }

    &::placeholder {
        color: var(--shadow-dark)
    }

`

const StyledTextField = styled(DefaultStyledTextField)(
  ({ style }) => style
)

export default StyledTextField

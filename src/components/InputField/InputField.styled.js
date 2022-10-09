import styled from 'styled-components'

const DefaultStyledInputField = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: center;
    box-sizing: border-box;
    padding: 8px;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Input = styled.input.attrs(({ type }) => ({
  type: type
}))`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 40%;
    height: 35px;
    padding: 3px 20px;
    margin: 12px;
    min-width: 200px;
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
    color: var(--decorative);
    font-weight: bold;
`

const StyledInputField = styled(DefaultStyledInputField)(
  ({ style }) => style
)

export { StyledInputField, Label, Input }

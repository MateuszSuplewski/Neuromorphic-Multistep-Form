import styled from 'styled-components'

const DefaultStyledNavigateButton = styled.button`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 35px;
    height: 35px;
    border-radius: 10px;
    color: var(--primary);
    background-color: var(--primary-bg);
    border: none;
    box-shadow:  4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);
    margin: 12px;
    cursor: pointer;
    transition: .3s ease;

    &:active {
        box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light);
    }

    &:hover{
        color: var(--decorative);
    }
`

const StyledNavigateButton = styled(DefaultStyledNavigateButton)(
  ({ style }) => style
)

export default StyledNavigateButton

import styled from 'styled-components'

const DefaultStyledErrors = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    box-sizing: border-box;
    max-width: 600px;
    width: 80%;
    border-radius: 6px;
    color: wheat;
    background-color: rgba(241, 48, 48,0.7);
    box-shadow:  6px 6px 5px var(--shadow-dark), -6px -6px 5px var(--shadow-light);
    font-weight: bold;

    @media (max-width: 768px) {
    width: 95%;
  }
`

const ErrorList = styled.ul`
    list-style: none;
    padding: 5px 20px;
    
`

const ErrorItem = styled.li`
text-align: left;
padding-top: 5px;
`

const StyledErrors = styled(DefaultStyledErrors)(
  ({ style }) => style
)

export { StyledErrors, ErrorList, ErrorItem }

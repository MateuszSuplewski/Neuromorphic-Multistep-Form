import styled from 'styled-components'

const DefaultStyledFormNavigation = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    max-width: 800px;
    width: 80%;

    @media (max-width: 768px) {
    width: 95%;
  }
`

const StyledFormNavigation = styled(DefaultStyledFormNavigation)(
  ({ style }) => style
)

export default StyledFormNavigation

import styled from 'styled-components'

const DefaultStyledFormPage = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 80%;
    max-width: 800px;

    @media (max-width: 768px) {
    width: 95%;
  }
`

const StyledFormPage = styled(DefaultStyledFormPage)(
  ({ style }) => style
)

export default StyledFormPage

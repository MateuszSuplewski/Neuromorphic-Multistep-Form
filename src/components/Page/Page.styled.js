import styled from 'styled-components'

const DefaultStyledPage = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 100vw;
    height: 100vh;
`

const StyledPage = styled(DefaultStyledPage)(
  ({ style }) => style
)

export default StyledPage

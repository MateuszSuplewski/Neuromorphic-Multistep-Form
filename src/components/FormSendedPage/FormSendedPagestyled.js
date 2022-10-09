import styled from 'styled-components'

const DefaultStyledFormSendedPage = styled.div`
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

const Header = styled.h2`
    color: var(--decorative);
`

const Paragraph = styled.p`
    color: var(--primary);
    font-weight: bold;
`

const StyledFormSendedPage = styled(DefaultStyledFormSendedPage)(
  ({ style }) => style
)

export { StyledFormSendedPage, Header, Paragraph }

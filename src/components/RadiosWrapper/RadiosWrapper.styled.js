import styled from 'styled-components'

const DefaultStyledRadiosWrapper = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};


    display: flex;
    justify-content: flex-start;
    width: 100%;
    flex-wrap: wrap;

    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledRadiosWrapper = styled(DefaultStyledRadiosWrapper)(
  ({ style }) => style
)

export default StyledRadiosWrapper

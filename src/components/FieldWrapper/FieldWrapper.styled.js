import styled from 'styled-components'

const DefaultStyledFieldWrapper = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    color: var(--primary);

    font-weight: bold;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-self: center;
    box-sizing: border-box;
    padding: 8px;
    align-items: flex-start;
  
    @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.p`
 color: var(--decorative);
width: 100%;
text-align: left;
align-self: center;
@media (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`

const StyledFieldWrapper = styled(DefaultStyledFieldWrapper)(
  ({ style }) => style
)

export { StyledFieldWrapper, Title }

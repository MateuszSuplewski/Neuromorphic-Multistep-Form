import styled from 'styled-components'

const DefaultStyledForm = styled.form`
  --primary-bg: ${({ theme }) => theme.primaryBackground};
  --shadow-light: ${({ theme }) => theme.shadowColorLight};
  --shadow-dark: ${({ theme }) => theme.shadowColorDark};
  --decorative: ${({ theme }) => theme.decorationColor};
  max-width: 1000px;
  width: 90vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 15px;
  margin: 15px auto;
  border-radius: 26px;
box-shadow: inset 2px 2px 4px var(--shadow-dark), inset -2px -2px 4px var(--shadow-light);
`

const StyledForm = styled(DefaultStyledForm)(({ style }) => style)

export default StyledForm

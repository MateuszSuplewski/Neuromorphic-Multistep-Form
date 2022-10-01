import styled from 'styled-components'

const DefaultStyledProgressBar = styled.div`
    --primary: ${({ theme }) => theme.primaryColor};
    --primary-bg: ${({ theme }) => theme.primaryBackground};
    --decorative: ${({ theme }) => theme.decorationColor};
    --shadow-light: ${({ theme }) => theme.shadowColorLight};
    --shadow-dark: ${({ theme }) => theme.shadowColorDark};

    width: 600px;
    height: 12px;
    border-radius: 26px;
    color: var(--primary);
    background-color: var(--primary-bg);
    box-shadow:  4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);
    margin: 12px;
    transition: .3s ease;
    position: relative;
`

const Progression = styled.div`
    width: ${({ width }) => width};
    height: 12px;
    border-radius: 26px;
    background-color: var(--decorative);
`

const ProgressBox = styled.div`
  position: absolute;
  top: 25px;
  width: 50px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary);
  font-weight: bold;
  box-shadow:  4px 4px 6px var(--shadow-dark), -4px -4px 6px var(--shadow-light);
  border-radius: 6px;
  transform: ${props => `translateX(${props.width - 25}px)`};
`

const StyledProgressBar = styled(DefaultStyledProgressBar)(
  ({ style }) => style
)

export { StyledProgressBar, Progression, ProgressBox }

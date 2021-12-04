import Main from 'components/main'
import { ThemeProvider } from 'styled-components'

export default function Home() {
  const theme = {
    mega: '#6BEFA3',
    quina: '#8666EF',
    loto: '#DD7AC6',
    lotoMania: '#FFAB64',
    timeMania: '#5AAD7D',
    sorte: '#BFAF83'
  }

  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  )
}

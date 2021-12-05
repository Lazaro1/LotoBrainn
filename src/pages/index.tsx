import Main from 'components/main'
import { useState } from 'react'
import { ThemeProvider, useTheme } from 'styled-components'

export default function Home() {
  const greenTheme = {
    primary: '#6BEFA3',
    quina: '#8666EF',
    loto: '#DD7AC6',
    lotoMania: '#FFAB64',
    timeMania: '#5AAD7D',
    sorte: '#BFAF83',
    grey: '#EFEFEF'
  }
  const blueTheme = {
    primary: '#8666EF',
    quina: '#8666EF',
    loto: '#DD7AC6',
    lotoMania: '#FFAB64',
    timeMania: '#5AAD7D',
    sorte: '#BFAF83',
    grey: '#EFEFEF'
  }

  const [theme, setTheme] = useState(greenTheme)

  const toggleTheme = () => {
    setTheme(blueTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <Main toggleTheme={toggleTheme} />
    </ThemeProvider>
  )
}

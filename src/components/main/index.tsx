import * as S from './styles'
import Select from 'react-select'
import { ThemeProvider, useTheme } from 'styled-components'
import {
  blueTheme,
  greenTheme,
  darkGreenTheme,
  pinkTheme,
  yellowTheme,
  orangeTheme
} from 'styles/theme'

import { useEffect, useState } from 'react'
import api from 'services/api'

const options = [
  { value: '1', label: 'MEGA-SENA' },
  { value: '2', label: 'QUINA' },
  { value: '3', label: 'LOTOFACIL' },
  { value: '4', label: 'LOTOMANIA' },
  { value: '5', label: 'TIMEMANIA' },
  { value: '6', label: 'DIA DE SORTE' }
]

interface LotoTypes {
  value: number
  label: string
}

const Main: React.FC = () => {
  const [tittle, setTittle] = useState('MEGA-SENA')
  const [theme, setTheme] = useState(greenTheme)

  useEffect(() => {
    getDataLoto()
  }, [])

  const getDataLoto = async () => {
    const result = await api.get('/loterias')
    console.log(result)
  }

  const handleLoto = (data: LotoTypes) => {
    if (Number(data.value) === 1) {
      setTheme(greenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 2) {
      setTheme(blueTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 3) {
      setTheme(pinkTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 4) {
      setTheme(orangeTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 5) {
      setTheme(darkGreenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 6) {
      setTheme(yellowTheme)
      setTittle(data.label)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <S.Wrapper>
        <S.containerOptions>
          <Select
            options={options}
            onChange={(e) => handleLoto(e)}
            placeholder="MEGA-SENA"
          />

          <S.containerLogo>
            <S.Logo src="/img/Logo_Sena.svg" alt="Logo Grab e texto Grab" />
            <S.LogoTittle>{tittle}</S.LogoTittle>
          </S.containerLogo>
          <S.Label>Concurso N° 4560</S.Label>
        </S.containerOptions>
        <S.containerResult>
          <S.resultWrapper>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
            <S.resultNumber>
              <S.labelNumber>50</S.labelNumber>
            </S.resultNumber>
          </S.resultWrapper>
          <S.containerInfo>
            <S.labelInfo>
              Este sorteio é meramente ilustrativo e não possui nenhuma ligação
              com a Caixa
            </S.labelInfo>
          </S.containerInfo>
        </S.containerResult>
      </S.Wrapper>
    </ThemeProvider>
  )
}

export default Main

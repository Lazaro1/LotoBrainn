import * as S from './styles'
import Select from 'react-select'
import { ThemeProvider } from 'styled-components'
import {
  blueTheme,
  greenTheme,
  darkGreenTheme,
  pinkTheme,
  yellowTheme,
  orangeTheme,
  redTheme,
  purppleTheme,
  greyTheme
} from 'styles/theme'

import { useEffect, useState } from 'react'
import api from 'services/api'

const Main: React.FC = () => {
  const [tittle, setTittle] = useState('MEGA-SENA')
  const [options, setOptions] = useState()
  const [dataConcurso, setDataConcurso] = useState<any>()
  const [theme, setTheme] = useState(greenTheme)

  useEffect(() => {
    getDataConcurso()
    getDataLoto('mega-sena')
  }, [])

  const getDataLoto = async (label: string) => {
    const { data } = await api.get(`/api/${label}/latest`)
    setDataConcurso(data)
  }

  const getDataConcurso = async () => {
    const { data } = await api.get('/api')
    const options = data.map((data: any, i: any) => {
      return { value: i, label: data.toUpperCase() }
    })
    setOptions(options)
  }

  const handleLoto = (data: any) => {
    if (Number(data.value) === 0) {
      getDataLoto(data.label.toLowerCase())
      setTheme(greenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 1) {
      getDataLoto(data.label.toLowerCase())
      setTheme(blueTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 2) {
      getDataLoto(data.label.toLowerCase())
      setTheme(pinkTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 3) {
      getDataLoto(data.label.toLowerCase())
      setTheme(orangeTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 4) {
      getDataLoto(data.label.toLowerCase())
      setTheme(darkGreenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 5) {
      getDataLoto(data.label.toLowerCase())
      setTheme(yellowTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 6) {
      getDataLoto(data.label.toLowerCase())
      setTheme(redTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 7) {
      getDataLoto(data.label.toLowerCase())
      setTheme(purppleTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 8) {
      getDataLoto(data.label.toLowerCase())
      setTheme(greyTheme)
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
          <S.Label>Concurso N° {dataConcurso?.concurso}</S.Label>
        </S.containerOptions>
        <S.containerResult>
          <S.RoundedDiv />
          <S.resultWrapper>
            {dataConcurso?.dezenas.map((numbers: string, i: number) => (
              <S.resultNumber key={i}>
                <S.labelNumber>{numbers}</S.labelNumber>
              </S.resultNumber>
            ))}
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

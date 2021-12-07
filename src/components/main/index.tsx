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

interface Concursos {
  loteriaId: number
  concursoId: string
}

interface dataConcursos {
  data: Date
  id: string
  loteria: number
  numeros: any
}

const Main: React.FC = () => {
  const [tittle, setTittle] = useState('MEGA-SENA')
  const [concursos, setConcursos] = useState<Concursos>()
  const [dataConcurso, setDataConcurso] = useState<dataConcursos>()
  const [theme, setTheme] = useState(greenTheme)

  useEffect(() => {
    getDataConcurso()
    getDataLoto(2359)
  }, [])

  const getDataLoto = async (id: any) => {
    const result = await api.get(`/concursos/${id}`)
    console.log(result.data, 'result')
    setDataConcurso(result.data)
  }

  const getDataConcurso = async () => {
    const result = await api.get(`/loterias-concursos`)
    setConcursos(result.data)
  }

  const handleLoto = (data: LotoTypes) => {
    if (Number(data.value) === 1) {
      getDataLoto(concursos[0].concursoId)
      setTheme(greenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 2) {
      getDataLoto(concursos[1].concursoId)
      setTheme(blueTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 3) {
      getDataLoto(concursos[2].concursoId)
      setTheme(pinkTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 4) {
      getDataLoto(concursos[3].concursoId)
      setTheme(orangeTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 5) {
      getDataLoto(concursos[4].concursoId)
      setTheme(darkGreenTheme)
      setTittle(data.label)
    } else if (Number(data.value) === 6) {
      getDataLoto(concursos[5].concursoId)
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
          <S.Label>Concurso N° {dataConcurso?.id}</S.Label>
        </S.containerOptions>
        <S.containerResult>
          <S.RoundedDiv />
          <S.resultWrapper>
            {dataConcurso?.numeros.map((numbers: string, i: number) => (
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

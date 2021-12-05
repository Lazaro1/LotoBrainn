import * as S from './styles'
import Select from 'react-select'

const options = [
  { value: 'MEGA-SENA', label: 'MEGA-SENA' },
  { value: 'QUINA', label: 'QUINA' },
  { value: 'LOTOFACIL', label: 'LOTOFACIL' },
  { value: 'LOTOMANIA', label: 'LOTOMANIA' },
  { value: 'TIMEMANIA', label: 'TIMEMANIA' },
  { value: 'DIA DE SORTE', label: 'DIA DE SORTE' }
]

const handleLoto = (values: any) => {
  console.log(values.value)
}

const Main = () => (
  <S.Wrapper>
    <S.containerOptions>
      <Select
        options={options}
        onChange={(e) => handleLoto(e)}
        placeholder="MEGA-SENA"
      />

      <S.containerLogo>
        <S.Logo src="/img/Logo_Sena.svg" alt="Logo Grab e texto Grab" />
        <S.LogoTittle>MEGA-SENA</S.LogoTittle>
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
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com
          a Caixa
        </S.labelInfo>
      </S.containerInfo>
    </S.containerResult>
  </S.Wrapper>
)

export default Main

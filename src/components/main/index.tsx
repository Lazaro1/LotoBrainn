import * as S from './styles'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const handleLoto = (values: any) => {
  console.log(values.value)
}

const Main = () => (
  <S.Wrapper>
    <S.containerOptions>
      <Select options={options} onChange={(e) => handleLoto(e)} />

      <S.containerLogo>
        <S.Logo src="/img/Logo_Sena.svg" alt="Logo Grab e texto Grab" />
        <S.Logo src="/img/MEGA-SENA.svg" alt="Logo Grab e texto Grab" />
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

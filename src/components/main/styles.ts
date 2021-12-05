import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: ${({ theme }) => theme.green};
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const containerOptions = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.green};
`
export const containerLogo = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 64px;
  margin-bottom: 2rem;
`

export const Label = styled.label`
  font-size: 15px;
  font-family: 'Montserrat', sans-serif;

  color: white;
`

export const containerResult = styled.div`
  width: 100%;
  height: 50%;

  clip-path: circle(96.5% at 50% 98%);
  background-color: ${({ theme }) => theme.grey};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 85px 0 30px 0;
`

export const resultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

export const resultNumber = styled.div`
  height: 76px;
  width: 76px;
  border-radius: 50%;
  margin: 10px;

  background-color: white;
  color: black;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const labelNumber = styled.label`
  color: #333333;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 27px;
`

export const containerInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const labelInfo = styled.label`
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  line-height: 21px;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  margin: 10px 60px 0px 60px;
`

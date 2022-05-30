import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #2E2C2C;
`;

export const Background = styled.ImageBackground`
  width: 100%;
  flex: 1;
`
export const LogoContainer = styled.View`
  width: 100%;
  margin-top: 60px;
  justify-content: center;
  align-items: center;
`

export const LogoImage = styled.Image`
  height: 100px;
  width: 100px;
`

export const Form = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

export const Typography = styled.Text`
  color: #FEFF7B;
  font-size: 20px;
`

export const Input = styled.TextInput`
  background-color: #fff;
  width: 100%;
  height: 70px;
  border-radius: 8px;
  margin-top: 10px;
  padding: 0 20px;
`

export const Button = styled.TouchableOpacity`
  width: 100%;
  background-color: #FEFF7B;
  height: 70px;
  margin-top: 10px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 15px;
`

export const Bold = styled.Text`
  font-size: 18px;
  margin-left: 10px;
  font-weight: bold;
`

export const LadSoftLogo = styled.Image`
  width: 150px;
  height: 40px;
  margin-top: 40px;
`
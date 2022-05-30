import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Background = styled.ImageBackground`
  width: 100%;
  flex: 1;
`

export const Body = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
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

export const ButtonText = styled.Text`
  font-size: 20px;
  color: #000;
`
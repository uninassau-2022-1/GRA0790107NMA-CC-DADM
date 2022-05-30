import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
`

export const Top = styled.View`
  background-color: #FFF;
  padding: 10px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: #c4c4c4;
`

export const TitleContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 8px 0;
`

export const Title = styled.Text`
  color: #3A362D;
  font-size: 25px;
`

export const Background = styled.ImageBackground`
  width: 100%;
  height: 200px;
`

export const Bottom = styled.View`
  padding: 10px;
`

export const DataContainer = styled.View`
  padding: 0 20px;
`

export const DataText = styled.Text`
  color: #3A362D;
  font-size: 20px;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Input = styled.TextInput`
  background-color: #F0F0F0;
  width: 100px;
  height: 40px;
  padding: 0 10px;
  margin-left: 20px;
  color: #3A362D;
  font-size: 20px;
  border-radius: 8px;
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
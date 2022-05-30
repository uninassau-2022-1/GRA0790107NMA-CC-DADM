import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 10px;
`

export const HeaderText = styled.Text`
  color: #3A362D;
  font-size: 18px;
`

export const Line = styled.View`
  margin-top: 5px;
  height: 1px;
  width: 100%;
  background-color: #c4c4c4;
`

export const ListCell = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`

export const ListItem = styled.Text`
  color: #3A362D;
  font-size: 25px;
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
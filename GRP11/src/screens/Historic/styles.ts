import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: #FFF;
  padding: 0 10px;
`

export const Background = styled.View`
  padding: 0 10px;
  background-color: #F0F0F0;
  justify-content: center;
  align-items: center;
  height: 42px;
  margin-bottom: 5px;
`

export const Header = styled.Text`
  font-size: 24px;
`

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
`

export const HeaderText = styled.Text`
  color: #3A362D;
  font-size: 28px;
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

export const Day = styled.Text`
  color: #3A362D;
  font-size: 25px;
`

export const ListItem = styled.Text`
  color: #3A362D;
  font-size: 25px;
`

export const Button = styled.TouchableOpacity``
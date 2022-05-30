import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 115px;
  background-color: #FFF;
  padding: 20px 10px;
`

export const Logo = styled.Image`
  width: 120px;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 10px;
`

export const GreetingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Greeting = styled.Text`
  font-size: 25px;
  color: #3A362D;
`

export const Button = styled.TouchableOpacity`
  flex-direction: row;
`

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #3A362D;
`
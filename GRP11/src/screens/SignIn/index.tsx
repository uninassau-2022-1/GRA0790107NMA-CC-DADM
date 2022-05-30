import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useAuth } from '../../hooks/auth';

import SignInImg from '../../assets/homebg.png';
import Logo from '../../assets/logo.png';
import Ladsoft from '../../assets/ladsoft.png';
import { 
  Background, 
  Bold, 
  Button, 
  Container, 
  Form, 
  Input, 
  LadSoftLogo, 
  LogoContainer, 
  LogoImage, 
  Typography 
} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  const handleLogin = useCallback(
    async (email: string, password: string) => {
      try {
        await signIn(email, password);
      } catch (err) {
        Alert.alert('Usuário ou senha errados. Verifique seus dados.');
      }
    },
    [signIn]
  );

  return (
    <Container>
      <Background source={SignInImg}>
        <LogoContainer>
          <LogoImage source={Logo} />
        </LogoContainer>

        <Form>
          <Typography>
            Faça o Login para acessar o sistema:
          </Typography>

          <Input
            onChangeText={(e: string) => setEmail(e)}
            value={email}
            placeholder='E-mail'
            autoCapitalize='none'
            autoCorrect={false}
            returnKeyType='next'
          />

          <Input
            onChangeText={(e: string) => setPassword(e)}
            value={password}
            secureTextEntry={true}
            placeholder='Senha'
            returnKeyType='send'
            onSubmitEditing={() => handleLogin(email, password)}
          />

          <Button
            onPress={() => handleLogin(email, password)}
          >
            <Feather name='log-in' size={20} color='#000' />

            <Bold>ENTRAR</Bold>
          </Button>

          <LadSoftLogo source={Ladsoft} />
        </Form>
      </Background>
    </Container>
  );
}

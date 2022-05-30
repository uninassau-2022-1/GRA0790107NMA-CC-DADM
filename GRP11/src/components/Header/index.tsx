import { MaterialIcons } from '@expo/vector-icons';
import LadSoft from '../../assets/ladsoft.png';

import { useAuth } from '../../hooks/auth';

import { 
  Button, 
  ButtonText, 
  Container, 
  Greeting, 
  GreetingContainer, 
  Logo 
} from './styles';

export function Header() {
  const { user, signOut } = useAuth();

  return (
    <Container>
      <Logo source={LadSoft} />

      <GreetingContainer>
        <Greeting>Bem vindo, {user.first_name || 'Usuário'}</Greeting>

        <Button onPress={() => signOut()}>
          <ButtonText>Sair</ButtonText>
          <MaterialIcons name='logout' size={22} color='#3A362D' />
        </Button>
      </GreetingContainer>
    </Container>
  );
}

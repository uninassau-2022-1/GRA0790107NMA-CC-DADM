import { isSameDay } from 'date-fns';
import { useState } from 'react';
import Dumbbell from '../../assets/dumbbell.png';
import { useOption } from '../../hooks/option';
import { useWorkout } from '../../hooks/workout';

import { 
  Background, 
  Body, 
  Button, 
  ButtonText, 
  Container 
} from './styles';

export function Dashboard() {
  const { lastDate, startWorkout } = useWorkout();
  const { chooseOption } = useOption();

  const handleStart = (option: string) => {
    chooseOption(option);
    startWorkout();
  }

  return (
    <Container>
      <Background source={Dumbbell}>
        <Body>
          <Button onPress={() => handleStart('A')}>
            <ButtonText>{isSameDay(lastDate, new Date()) ? 'VOCE JA TREINOU HOJE' : 'INICIAR TREINO A'}</ButtonText>
          </Button>

          <Button onPress={() => handleStart('B')}>
            <ButtonText>{isSameDay(lastDate, new Date()) ? 'VOCE JA TREINOU HOJE' : 'INICIAR TREINO B'}</ButtonText>
          </Button>

          <Button onPress={() => handleStart('C')}>
            <ButtonText>{isSameDay(lastDate, new Date()) ? 'VOCE JA TREINOU HOJE' : 'INICIAR TREINO C'}</ButtonText>
          </Button>
        </Body>
      </Background>
    </Container>
  );
}

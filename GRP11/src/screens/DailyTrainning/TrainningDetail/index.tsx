import YoutubePlayer from "react-native-youtube-iframe";
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Sports from '../../../assets/sport.png';
import { 
  Background, 
  Bottom, 
  Button, 
  ButtonText, 
  Container, 
  DataContainer, 
  DataText, 
  Input, 
  Line, 
  Row, 
  Title, 
  TitleContainer, 
  Top 
} from './styles';
import { api } from "../../../services/api";
import { useWorkout } from "../../../hooks/workout";

interface Workout {
  exe_name: string;
  id: number;
  img_path: string;
  img_type: string;
}

export function TrainningDetail() {
  const [load, setLoad] = useState(null);
  const [trainning, setTrainning] = useState<Workout>({} as Workout);

  const navigation = useNavigation();
  const { workout } = useWorkout();

  
  useEffect(() => {
    async function getWorkout() {
      try {
        const {data} = await api.get(`/exercises/${workout.exercise_id}`);
        
        setTrainning(data);
      } catch (err) {
        Alert.alert(
          'Falha na conexão',
          'Não foi possível carregar o seu treino.'
        );    
      }
    }

    getWorkout();
  }, [])

  const handleCompleteTask = () => {
    async function completeTask() {
      try {
        await api.put(`/workout/update/${workout.exercise_id}`, { load })
      } catch (err) {
        Alert.alert(
          'Falha na conexão',
          'Não foi possível concluir o treino.'
        );    
      }
    }

    completeTask();
    navigation.navigate('Treino do dia');
  }

  return (
    <Container>
      <Top>
        <View>
          <Line />
        </View>

        <TitleContainer>
          <Feather
            name='chevron-left'
            size={30}
            color='#3A362D'
            onPress={() => navigation.goBack()}
          />
          <Title>{workout.exercise_name}</Title>
          <View style={{ width: 20 }}></View>
        </TitleContainer>
      </Top>

      {trainning.img_type === 'video' && (
        <YoutubePlayer
          height={300}
          play={true}
          videoId={trainning.img_path}
          initialPlayerParams={{
            controls: false,
            loop: true,
            preventFullScreen: true,
          }}
        />
      )}

      <Bottom>
        <DataContainer>
          <DataText>Séries: {workout.sets}</DataText>
          <DataText>
            Repetições: {workout.repetitions}
          </DataText>
          <DataText>
            Intervalo: 60 segundos
          </DataText>
          <Row>
            <DataText>Carga executada:</DataText>
            <Input
              keyboardType='numeric'
              onChangeText={(e) => setLoad(e)}
              value={load}
            />
          </Row>
        </DataContainer>

        <Button onPress={() => handleCompleteTask()}>
          <ButtonText>ENVIAR</ButtonText>
        </Button>
      </Bottom>
    </Container>
  );
}

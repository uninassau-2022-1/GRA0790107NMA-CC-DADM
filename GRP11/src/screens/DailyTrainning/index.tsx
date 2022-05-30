import React, { useState, useEffect } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { Loader } from '../../components/Loader';
import { EmptyList } from '../../components/EmptyList';

import { useNavigation, useRoute } from '@react-navigation/native';
import { 
  Button, 
  ButtonText, 
  Container, 
  HeaderText, 
  Line, 
  ListCell, 
  ListItem 
} from './styles';
import { useWorkout } from '../../hooks/workout';
import { api } from '../../services/api';
import { useOption } from '../../hooks/option';
import { Splash } from '../../components/Splash';

interface Training {
  id: number;
  exercise_id: number;
  exercise_name: string;
  workout_type: string;
  prescribed_at: Date;
  expiration_date: Date;
  sets: number;
  repetitions: number;
  exe_load?: number;
}

export function DailyTrainning() {
  const [dailyTrainning, setDailyTrainning] = useState<Training[]>([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const { finishWorkout, chooseWorkout } = useWorkout();
  const { option } = useOption();
  
  useEffect(() => {
    async function getDailyTrainning() {
      try {
        const {data} = await api.get(`/workout/${option}`);

        setDailyTrainning(data)
      } catch (err) {
        Alert.alert(
          'Falha na conexão',
          'Não foi possível carregar o seu treino.'
        );    
      }
    }

    try {
      setLoading(true);
      
      getDailyTrainning();
    } catch (err) {
      Alert.alert(
        'Falha na conexão',
        'Não foi possível carregar o seu treino.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const handleFinishWorkout = () => {
    finishWorkout();
  }

  return (
    <>
      <Loader loading={loading} />

      <Container>
        <View>
          <HeaderText>Seu treino hoje é:</HeaderText>
          <Line />
        </View>

        {dailyTrainning.length === 0 ? (
          <EmptyList />
        ) : (
          <FlatList
            data={dailyTrainning}
            keyExtractor={(trainning) => String(trainning.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: trainning }) => (
              <>
                <ListCell>
                  <ListItem>{trainning.exercise_name}</ListItem>
                  {!trainning.exe_load ? (
                    <MaterialIcons
                      name='add'
                      size={26}
                      color='#3A362D'
                      onPress={() =>
                        chooseWorkout(trainning)
                      }
                    />
                  ) : (
                    <Feather
                      name='check'
                      size={30}
                      color='#0B4455'
                      onPress={() => {}}
                    />
                  )}
                </ListCell>

                <Line />
              </>
            )}
          />
        )}

        <Button onPress={() => handleFinishWorkout()}>
          <ButtonText>CONCLUIR TREINO</ButtonText>
        </Button>
      </Container>
    </>
  );
}

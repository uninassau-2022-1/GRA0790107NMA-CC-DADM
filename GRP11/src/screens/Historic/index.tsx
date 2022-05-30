import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import * as  DateFns from 'date-fns';

import { Loader } from '../../components/Loader';
import { EmptyList } from '../../components/EmptyList';

import { useNavigation } from '@react-navigation/native';
import { Background, Button, Container, Day, Header, HeaderContainer, HeaderText, Line, ListCell, ListItem } from './styles';

interface Historic {
  id: number;
  date: string;
  trainning: string;
}

export function Historic() {
  const [historic, setHistoric] = useState<Historic[]>([]);
  const [dateFilter, setDateFilter] = useState(() => onChangeNameDateState(new Date()))
  const [date, setDate] = useState(() => new Date())
  const [days, setDays] = useState(null);
  const [monthYear, setMonthYear] = useState(() => onChangeMonthYear(new Date()))
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function onChangeNameDateState (date: Date) {
    const year = DateFns.getYear(date);
    const month = DateFns.getMonth(date);
    const monthTranslated = renderMonth(month)

    return `${monthTranslated} de ${year}`
  }

  function renderMonth(month: number){
    switch(month){
      case 0:
        return `Janeiro`
      case 1:
        return `Fevereiro`
      case 2: 
        return `Março`
      case 3:
        return `Abril`
      case 4: 
        return `Maio`
      case 5: 
        return `Junho`
      case 6: 
        return `Julho`
      case 7:
        return `Agosto`
      case 8:
        return `Setembro`
      case 9:
        return `Outubro`
      case 10: 
        return `Novembro`
      case 11:
        return `Dezembro`
    }    
  }

  // function getDaysofMonth (date) {
  //   const listOfDays = [];
  //   let firstDay = DateFns.startOfMonth(date);
  //   const daysInMonth = DateFns.getDaysInMonth(date);

  //   console.log(firstDay, daysInMonth)

  //   for(let i = 0; i < daysInMonth; i++){
  //     listOfDays.push(firstDay);

  //     firstDay = DateFns.addDays(firstDay, 1);
  //   }

  //   console.log(listOfDays)
    
  // }

  function onChangeMonthYear (date) {
    const month = `${DateFns.getMonth(date + 1)}`.padStart(2, '0');

    return `${month}.${DateFns.getYear(date)}`
  }

  const onChangeNameDate = (date: Date) => {
    const year = DateFns.getYear(date);
    const month = DateFns.getMonth(date);
    const monthTranslated = renderMonth(month);

    setDateFilter(`${monthTranslated} de ${year}`)
  };

  function onChangeDate (date, action: string) {
    console.log(date)
    date = action === 'NEXT_MONTH' ? DateFns.addMonths(date, 1) : DateFns.subMonths(date, 1);

    const month = `${DateFns.getMonth(date) + 1}`.padStart(2, '0');
    const year = DateFns.getYear(date);
    const monthYear = `${month}.${year}`;

    setDate(date);
    setMonthYear(monthYear);

    onChangeNameDate(date)
  }

  useEffect(() => {
    try {
      setLoading(true);

      function getHistoric(userId: number) {
        setTimeout(() => {}, 2000);

        const data = [
          {
            id: 1,
            date: '2020-12-02',
            trainning: 'A',
          },
          {
            id: 2,
            date: '2020-12-03',
            trainning: 'B',
          },
          {
            id: 3,
            date: '2020-12-03',
            trainning: 'C',
          },
          {
            id: 4,
            date: '2020-12-04',
            trainning: 'A',
          },
          {
            id: 5,
            date: '2020-12-05',
            trainning: 'B',
          },
          {
            id: 6,
            date: '2020-12-08',
            trainning: 'C',
          },
          {
            id: 7,
            date: '2020-12-10',
            trainning: 'A',
          },
          {
            id: 8,
            date: '2020-12-11',
            trainning: 'B',
          },
          {
            id: 9,
            date: '2020-12-12',
            trainning: 'C',
          },
          {
            id: 10,
            date: '2020-12-13',
            trainning: 'A',
          },
          {
            id: 11,
            date: '2020-12-16',
            trainning: 'B',
          },
        ];
        return data.reverse();
      }

      setHistoric(getHistoric(1));
    } catch (err) {
      Alert.alert(
        'Falha na conexão',
        'Não foi possível carregar o seu treino.'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  function handleNavigate(trainning) {
    console.log(trainning)
    navigation.navigate('HistoricDetail', { trainning })
  }

  return (
    <>
      <Loader loading={loading} />

      <Container>
        <Background>
          <Header>Histórico de treinos</Header>
        </Background>

        <HeaderContainer>
          <Feather name='chevron-left' size={30} color='#3A362D' onPress={() => onChangeDate(date, 'LAST_MONTH')} />
          <HeaderText>{dateFilter}</HeaderText>
          <Feather name='chevron-right' size={30} color='#3A362D' onPress={() => onChangeDate(date, 'NEXT_MONTH')}/>
        </HeaderContainer>

        <Line />

        {historic.length === 0 ? (
          <EmptyList />
        ) : (
          <FlatList
            data={historic}
            keyExtractor={(trainning) => String(trainning.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: trainning }) => (
              <>
                <ListCell>
                  <Day>{DateFns.format(DateFns.parseISO(trainning.date), 'dd')}</Day>
                  <ListItem>Treino {trainning.trainning}</ListItem>
                  <View></View>
                  <View></View>
                  <Button onPress={() => handleNavigate(trainning)}>
                    <Text>Ver mais</Text>
                  </Button>
                </ListCell>

                <Line />
              </>
            )}
          />
        )}
      </Container>
    </>
  );
}


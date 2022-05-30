import { View, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function EmptyList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Feather name='alert-triangle' size={40} color='#3A362D' />
      <Text
        style={{
          color: '#3A362D',
          fontSize: 20,
        }}
      >
        Ooops...
      </Text>
      <Text
        style={{
          color: '#3A362D',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        Parece que não há nenhum treino cadastrado para você.
      </Text>
    </View>
  );
}


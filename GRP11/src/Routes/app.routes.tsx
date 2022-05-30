import { MaterialIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Header } from '../components/Header';

import { Dashboard } from '../screens/Dashboard';
import { DailyTrainning } from '../screens/DailyTrainning';
import { TrainningDetail } from '../screens/DailyTrainning/TrainningDetail';
  
import { useWorkout } from '../hooks/workout';

const AppStack = createNativeStackNavigator();


export function AppRoutes() {
  const { hasStartedToday, lastDate } = useWorkout();

  return (
    <>
        <Header />
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          {!hasStartedToday && <AppStack.Screen name='Dashboard' component={Dashboard} />}
          {hasStartedToday && <AppStack.Screen name='Treino do dia' component={DailyTrainning} />}
          {hasStartedToday && <AppStack.Screen name='Exercício' component={TrainningDetail} />}
        </AppStack.Navigator>
      </>
  );
}

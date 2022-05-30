import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { isSameDay } from 'date-fns'
import { useNavigation } from '@react-navigation/native';

interface WorkoutProviderProps {
  children: ReactNode;
}

interface IWorkoutContextData {
  hasStartedToday: boolean;
  workout: Workout;
  startWorkout: () => void;
  finishWorkout: () => void;
  chooseWorkout: (workout: Workout) => void;
  lastDate: Date;
}

interface Workout {
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

const WorkoutContext = createContext({} as IWorkoutContextData);

function WorkoutProvider({ children }: WorkoutProviderProps) {
  const [hasStartedToday, setHasStartedToday] = useState(false);
  const [lastDate, setLastDate] = useState({} as Date);
  const [workout, setWorkout] = useState({} as Workout);

  const navigation = useNavigation();

  const startWorkout = () => {
    if (isSameDay(lastDate, new Date())) {
      return;
    }
    
    setHasStartedToday(true);
    navigation.navigate('Treino do dia')
  } 

  const finishWorkout = () => {
    setHasStartedToday(false);
    setLastDate(new Date());
    navigation.navigate('Dashboard');
  }

  const chooseWorkout= (workout: Workout) => {
    setWorkout(workout);

    navigation.navigate('Exercício')
  }

  return (
    <WorkoutContext.Provider
      value={{
        hasStartedToday,
        startWorkout,
        finishWorkout,
        lastDate,
        chooseWorkout,
        workout
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

function useWorkout() {
  const context = useContext(WorkoutContext);

  return context;
}

export { WorkoutProvider, useWorkout };

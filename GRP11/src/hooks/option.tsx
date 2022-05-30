import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { isSameDay } from 'date-fns'
import { useNavigation } from '@react-navigation/native';

interface OptionProviderProps {
  children: ReactNode;
}

interface IOptionContextData {
  option: string;

  chooseOption: (option: string) => void;
}

const OptionContext = createContext({} as IOptionContextData);

function OptionProvider({ children }: OptionProviderProps) {
  const [option, setOption] = useState('');

  const chooseOption = (option: string) => {
    setOption(option);
  }

  return (
    <OptionContext.Provider
      value={{
        option,
        chooseOption,
      }}
    >
      {children}
    </OptionContext.Provider>
  );
}

function useOption() {
  const context = useContext(OptionContext);

  return context;
}

export { OptionProvider, useOption };

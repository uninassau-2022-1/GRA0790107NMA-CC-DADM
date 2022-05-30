import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Splash } from '../components/Splash';
import { SignIn } from '../screens/SignIn';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name='Splash' component={Splash} />
      <Screen name='SignIn' component={SignIn} />
    </Navigator>
  );
}

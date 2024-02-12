import * as React from 'react'
import { Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import  { NavigationContainer} from '@react-navigation/native'
import { CalculationScreen } from './src/screens/ClaculationScreen';
import { HistoryScreen } from './src/screens/HistoryScreen';

const Stack = createStackNavigator()
function App(){
  return(
 <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Calculation" component={CalculationScreen}  />
    <Stack.Screen name="HistoryScreen" component={HistoryScreen}  />
  </Stack.Navigator>

  </NavigationContainer>
  );
}
export default App
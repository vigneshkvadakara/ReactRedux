import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import friendsReducer from './FriendReducer';
import HomeScreen from './screens/home';
import AddStud from './screens/AddStud';

const Stack = createNativeStackNavigator();
const store = createStore(friendsReducer);

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="stud" component={AddStud} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
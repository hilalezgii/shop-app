import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Products from './src/pages/Products';
import Detail from './src/pages/Detail';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: "Dükkan",
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
        }}
        />

        <Stack.Screen name="DetailPage" component={Detail} options={{
          title: "Detay",
          headerStyle: { backgroundColor: '#64b5f6' },
          headerTitleStyle: { color: 'white' },
          headerTintColor: 'white',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

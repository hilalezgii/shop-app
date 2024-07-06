import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../pages/Login/Login';
import Detail from '../pages/Detail/Detail';
import Products from '../pages/Products';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Stack = createStackNavigator();

export default function Router() {
    const userSession = useSelector(s => s.auth?.user?.username);
    const isLoading = useSelector(s => s.auth?.isAuthLoading);
    const dispatch =useDispatch();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {!userSession ?
                    (
                        <Stack.Screen name="LoginPage" component={Login} options={{
                            headerShown: false,
                        }}
                        />
                    )
                    :
                    (
                        <>
                            <Stack.Screen name="ProductsPage" component={Products} options={{
                                title: "Dükkan",
                                headerStyle: { backgroundColor: '#64b5f6' },
                                headerTitleStyle: { color: 'white' },
                                headerRight:() => <MaterialIcons name ="logout" size={30} color ="white" onPress={() =>dispatch({type:'REMOVE_USER'})}/>
                            }}
                            />
                            <Stack.Screen name="DetailPage" component={Detail} options={{
                                title: "Detay",
                                headerStyle: { backgroundColor: '#64b5f6' },
                                headerTitleStyle: { color: 'white' },
                                headerTintColor: 'white',
                            }} />
                        </>
                    )
                }

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

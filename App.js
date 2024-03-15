import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import ProductsScreen from './screens/ProductsScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductDetails from './screens/ProductDetails';
import { QueryClient, QueryClientProvider } from 'react-query';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const queryClient = new QueryClient();

const HomeStack = () => (
  <Stack.Navigator initialRouteName='Home' screenOptions={{  headerShown: false }}>
    <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name='ProductsScreen' component={ProductsScreen} options={{ headerTitle: '' }} />
    <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerTitle: '' }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              } else if (route.name === 'Products') {
                iconName = focused ? 'pricetag' : 'pricetag-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarStyle={{
            backgroundColor: 'white',
            borderTopColor: 'transparent',
          }}
          tabBarItemStyle={{
            marginVertical: 5,
          }}
          tabBarActiveTintColor="blue"
          tabBarInactiveTintColor="gray"
        >
          <Tab.Screen name="Home" component={HomeStack} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Products" component={ProductsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;

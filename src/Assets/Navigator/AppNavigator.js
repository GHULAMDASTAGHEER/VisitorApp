import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../Screens/main/Home';
import Map from '../../Screens/main/Map';
import Heart from '../../Screens/main/Heart';
import User from '../../Screens/main/User';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Userselector from '../../Component/Userselector';
import UserModal from '../../Component/UserModal';
import Description from '../../Screens/main/Description';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="BottomTab"
          component={BottomTab}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Userselector" component={Userselector} />
        <Stack.Screen name="UserModal" component={UserModal} />
        <Stack.Screen name="Description" component={Description} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) => (
            <Fontisto name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) => (
            <Feather name="map" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Heart"
        component={Heart}
        options={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="heart-o" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={User}
        options={{
          tabBarShowLabel: false,
          tabBarInactiveTintColor: 'black',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;

const styles = StyleSheet.create({});

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Produtos from '../views/produtos'
import Home from '../views/home'
import Login from '../views/login'

const tab = createBottomTabNavigator()

const Tab = () => {
    return (
        <tab.Navigator initialRouteName="Login" tabBaroptions={{
            activeTintColor: 'red',
            inactiveTintColor: 'red',
            labelStyle: {fontSize: 30}
            }}>
            <tab.Screen name="Home" component={Home} options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color='red' size={size} />
                ),}}
            />
            
            <tab.Screen name="Produtos" component={Produtos} options={{
                tabBarLabel: 'Produtos',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="cart" color='red' size={size} />
                ),}}/>

            <tab.Screen name="Login" component={Login} options={{
                tabBarLabel: 'Login',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="key" color='red' size={size} />
                ),}}/>
        </tab.Navigator>
    )
}

export default Tab;
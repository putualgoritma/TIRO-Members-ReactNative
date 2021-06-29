import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Login'
import Register from '../Register'
import Home from '../Home'
import Cart from '../Cart'
import Produk from '../Produk'
import Chat from '../Chat'
import Agent from '../Agent'
import CompleteOrder from '../CompleteOrder'
import Profile from '../Profile'
const Stack = createStackNavigator();
const Router = () =>{
    return (
        <Stack.Navigator initialRoutName="Login">
             <Stack.Screen
                name="Login"
                component ={Login}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Register"
                component ={Register}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Home"
                component ={Home}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Cart"
                component ={Cart}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Agent"
                component ={Agent}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="CompleteOrder"
                component ={CompleteOrder}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Produk"
                component ={Produk}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Chat"
                component ={Chat}
                options={{headerShown:false}}
            />
            <Stack.Screen
                name="Profile"
                component ={Profile}
                options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}
export default Router 
import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// screens

import Home from './src/screens/Home';
import Stack from './src/screens/Stack';

const HomeStack = createNativeStackNavigator();
  
function HomeStackScreen(){
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home}/>
            <HomeStack.Screen name='Stack' component={Stack}/>
        </HomeStack.Navigator>
    )
}


export default function Navigation(){
    return(
        <NavigationContainer>
            <HomeStackScreen/>
        </NavigationContainer>
    );
}
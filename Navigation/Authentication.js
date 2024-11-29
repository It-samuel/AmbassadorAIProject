import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScrn from "../Screens/OnboardingScrn";
import SplashScreen from "../Screens/SplashScreen";
import LoginScrn from "../Screens/LoginScrn";
import SignUpScrn from "../Screens/SignUpScrn";
import BottomTabs from "./BottomTabs";


 
const Stack = createNativeStackNavigator();

export default function Authentication(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false
                    }}
                />
            <Stack.Screen
                    name="OnboardingScrn"
                    component={OnboardingScrn}
                    options={{
                        headerShown: false
                    }}
                    />
            <Stack.Screen
                    name="LoginScrn"
                    component={LoginScrn}
                    options={{
                        headerShown: false
                    }}
                    />
            <Stack.Screen
                    name="SignUpScrn"
                    component={SignUpScrn}
                    options={{
                        headerShown: false
                    }}
                    />
            <Stack.Screen
                    name="BottomTabs"
                    component={BottomTabs}
                    options={{
                        headerShown: false
                    }}
                    />
                    
        </Stack.Navigator>
    )
}
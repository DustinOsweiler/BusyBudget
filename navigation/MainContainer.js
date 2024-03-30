import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

//Screens
import HomeScreen from './screens/HomeScreen'
import Charts from './screens/Charts'
import AddBudget from './screens/AddBudget'

//Screen Names
const homeName = 'Home'
const chartName = 'Charts'
const addbudgetName = 'Add Budget'

const Tab = createBottomTabNavigator();

export default function MainContainer(){
    return(
        <NavigationContainer>
            <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'white',
                tabBarLabelStyle: { paddingBottom: 10, fontSize: 20 },
                tabBarStyle: { padding: 10, height: 70, backgroundColor: '#00755A',},
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if (rn === homeName){
                        iconName = focused ? 'home' : 'home-outline'
                    }   else if (rn === chartName){
                        iconName = focused ? 'bar-chart' : 'bar-chart-outline'
                    }   else if (rn === addbudgetName){
                        iconName = focused ? 'add' : 'add'
                    }

                    return <Ionicons name={iconName} size={size} color={color}/>;

                },
            })}>

            <Tab.Screen name={homeName} component={HomeScreen}/>
            <Tab.Screen name={addbudgetName} component={AddBudget}/>
            <Tab.Screen name={chartName} component={Charts}/>

            </Tab.Navigator>

        </NavigationContainer>
    );
}
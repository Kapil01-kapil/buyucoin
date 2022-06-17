import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';



import Home from "../containers/Home"
import Details from "../containers/Details"
const StackNavigator = createStackNavigator();

const AppNavigation = () => {

  return (

    <StackNavigator.Navigator  >
      <StackNavigator.Screen
        name={"Home"}
        component={Home}
      

      />
   




      <StackNavigator.Screen
        name={"Details"}
        component={Details}
       

      />

     
        
        


    </StackNavigator.Navigator>

  )
}

export default AppNavigation

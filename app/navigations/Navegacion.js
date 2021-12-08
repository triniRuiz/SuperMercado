import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Icon} from "react-native-elements";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Departamentos from "../screens/Departamentos";
import Usuarios from "../screens/Usuarios";



const Tab= createBottomTabNavigator();
export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Usuarios"
              tabBarStyle={
                {
                    tabBarInteractiveTintColor:"#52585E",
                    tabBarActiveTintColor:"00a680",
                }
              }
              screenOptions={({route})=>({
                tabBarIcon:({color})=>opciones(route,color),
              })}
            >

                <Tab.Screen name="Departamentos"
                component={Departamentos}
                options={{title:"Departamentos"}}/>
                <Tab.Screen name="Usuarios"
                component={Usuarios}
                options={{title:"Usuarios"}}/>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function opciones(ruta, color){
    let iconName;

    switch(ruta.name){
        case"Login":
            iconName="home";
            break;
        case"Cuenta":
            iconName="person";
            break;
        case"Departamentos":
            iconName="drive-document";
            break;
        case "Usuarios":
            iconName="people";
            break;
        case "Crear":
            iconName="";
            break;
    }
    return(
        <Icon type="material-comunity" name={iconName} size={22} color={color}/>
    )
}






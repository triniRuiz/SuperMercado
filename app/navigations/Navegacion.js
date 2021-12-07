import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {Icon} from "react-native-elements";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Login from "../screens/Login";
import Cuenta from "../screens/Cuenta";
import Departamentos from "../screens/Departamentos";
import Usuarios from "../screens/Usuarios";
import Crear from "../screens/CrearDep";


const Tab= createBottomTabNavigator();
export default function Navegacion(){
    return(
        <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Login"
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

                <Tab.Screen name="login"
                component={Login}
                options={{title:"Login"}}/>
                <Tab.Screen name="Cuenta"
                component={Cuenta}
                options={{title:"Cuenta"}}/>
                <Tab.Screen name="Departamentos"
                component={Departamentos}
                options={{title:"Departamentos"}}/>
                <Tab.Screen name="Usuarios"
                component={Usuarios}
                options={{title:"Usuarios"}}/>
                <Tab.Screen name="Crear Dep."
                component={Crear}
                options={{title:"Nuevo Dep."}}/>
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






import React from "react";
import { useEffect, useState } from 'react';
import {View, Text} from "react-native";
import { usuarios_todos } from "../scripts/users/users";

export default function Usuarios(){
    const [users, setUser] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false)

    useEffect(() => {
        usuarios_todos().then(arreglo => {
          setUser(arreglo);
        })
        .catch(error => {
          console.log('Error: ',error);
        });

      setReloadUsers(false)
    }, [reloadUsers]);

    for (const user of users) {
        console.log(user);
    }
    return(
        <View>
            <Text>Crear usuario nuevo</Text>
            <Text>Crear usuario nuevo</Text>
        </View>
    );
}

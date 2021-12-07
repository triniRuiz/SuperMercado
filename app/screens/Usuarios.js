import React from "react";
import { useEffect, useState } from 'react';
import { Text} from "react-native";
import { usuarios_todos } from "../scripts/users/users";
import { StyleSheet, View } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function Usuarios(){
    const [users, setUser] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false)
    const tableHead = ['Nombre', 'Departamento', 'Correo', 'Días', 'Laborales'];
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
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Name</DataTable.Title>
                    <DataTable.Title>Email</DataTable.Title>
                    <DataTable.Title numeric>Age</DataTable.Title>
                </DataTable.Header>
            </DataTable>
        </View>
    );
}

import React from "react";
import { useEffect, useState } from 'react';
import { Text} from "react-native";
import { usuarios_todos } from "../scripts/users/users";
import { View } from 'react-native';
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
    const data = [];
    for (const user of users) {
        const aux = [];
        aux.push(user.nombre);
        aux.push(user.departamento);
        aux.push(user.email);
        aux.push(user.dias);
        aux.push(user.role);
        data.push(aux);
    }
    return(
        <View>
            <Text>Listado de usuarios</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Departamento</DataTable.Title>
                    <DataTable.Title>Correo</DataTable.Title>
                    <DataTable.Title>Dias Laborales</DataTable.Title>
                    <DataTable.Title>Rol</DataTable.Title>
                </DataTable.Header>
                {users.map( usuario =>{
                    return (
                    <DataTable.Row>
                     <DataTable.Cell>{usuario.nombre}</DataTable.Cell>
                     <DataTable.Cell>{usuario.departamento}</DataTable.Cell>
                     <DataTable.Cell>{usuario.email}</DataTable.Cell>
                     <DataTable.Cell>{usuario.dias}</DataTable.Cell>
                     <DataTable.Cell>{usuario.role}</DataTable.Cell>
                    </DataTable.Row>
                    );
                })}
            </DataTable>
        </View>
    );
}

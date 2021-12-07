import React from "react";
import { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import { departamentos_todos } from '../scripts/department/department';
import { DataTable } from 'react-native-paper';

export default function Departamentos(){

    const [departments, setdepartamento] = useState([]);
    const [reloadUsers, setReloadDepartamentos] = useState(false)

    useEffect(() => {
        departamentos_todos().then(arreglo => {
          setdepartamento(arreglo);
        })
        .catch(error => {
          console.log('Error: ',error);
        });

      setReloadDepartamentos(false)
    }, [reloadUsers]);

    
    return(
        <View>
            <Text>Listado de Departamentos</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>Nombre</DataTable.Title>
                    <DataTable.Title>Descripcion</DataTable.Title>
                </DataTable.Header>
                {departments.map( departamento =>{
                    return (
                    <DataTable.Row>
                     <DataTable.Cell>{departamento.nombre}</DataTable.Cell>
                     <DataTable.Cell>{departamento.descripcion}</DataTable.Cell>
                    </DataTable.Row>
                    );
                })}
            </DataTable>
        </View>
    );
}

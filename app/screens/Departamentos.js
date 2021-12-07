import React from "react";
import { useEffect, useState } from 'react';
import {View, Text} from "react-native";
import { departamentos_todos } from '../scripts/department/department';


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
            <Text>Departamentos</Text>
        </View>
    );
}

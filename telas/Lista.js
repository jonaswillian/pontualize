import { useState } from "react";
import { View, SafeAreaView } from "react-native";
import { estilo } from "../assets/Formatacao";
import { Dropdown } from 'react-native-element-dropdown';

export default function Lista(){
    const dados = [
    { label: 'Janeiro', value: '1' },
    { label: 'Fevereiro', value: '2' },
    { label: 'Março', value: '3' },
    { label: 'Abril', value: '4' },
    { label: 'Maio', value: '5' },
    { label: 'Junho', value: '6' },
    { label: 'Julho', value: '7' },
    { label: 'Agosto', value: '8' },
    { label: 'Setembro', value: '9' },
    { label: 'Outubro', value: '10' },
    { label: 'Novembro', value: '11' },
    { label: 'Dezembro', value: '12' },
  ];
  const [value, setValue] = useState(null);
    return(
    <SafeAreaView style={estilo.tela}>
        <Dropdown
        data={dados}
        labelField="label"
        valueField="value"
        placeholder="Selecione um mês"
        value={value}
          onChange={item => {
            setValue(item.value);
          }}
        />
    </SafeAreaView>);
}
import { useState } from "react";
import { View, SafeAreaView, Text } from "react-native";
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

        <View style={estilo.quadro_horarios}>
          <Text style={estilo.titulo_horarios}>01/06</Text>
          <Text style={estilo.label_horarios}>Entrada:  <Text style={estilo.valor_horarios}>08:03</Text> </Text>
          <Text style={estilo.label_horarios}>Saída:    <Text style={estilo.valor_horarios}>17:05</Text> </Text>
        </View>

        <View style={estilo.quadro_horarios}>
          <Text style={estilo.titulo_horarios}>02/06</Text>
          <Text style={estilo.label_horarios}>Entrada:  <Text style={estilo.valor_horarios}>08:08</Text> </Text>
          <Text style={estilo.label_horarios}>Saída:    <Text style={estilo.valor_horarios}>17:04</Text> </Text>
        </View>

        <View style={estilo.quadro_horarios}>
          <Text style={estilo.titulo_horarios}>03/06</Text>
          <Text style={estilo.label_horarios}>Entrada:  <Text style={estilo.valor_horarios}>08:04</Text> </Text>
          <Text style={estilo.label_horarios}>Saída:    <Text style={estilo.valor_horarios}>17:10</Text> </Text>
        </View>

        <View style={estilo.quadro_horarios}>
          <Text style={estilo.titulo_horarios}>06/06</Text>
          <Text style={estilo.label_horarios}>Entrada:  <Text style={estilo.valor_horarios}>08:01</Text> </Text>
          <Text style={estilo.label_horarios}>Saída:    <Text style={estilo.valor_horarios}>17:11</Text> </Text>
        </View>

    </SafeAreaView>
    );
}
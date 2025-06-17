import { View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import { estilo } from "../assets/Formatacao";

export default function Marcar(){
    return(
    <SafeAreaView style={[estilo.tela, {justifyContent:'center', alignItems:'center'}]}>
        <Text style={estilo.hora_atual}>12:00</Text>
        <TouchableOpacity style={estilo.botao_ponto}>
            <Text style={estilo.texto_botao_ponto}>BATER O PONTO</Text>
        </TouchableOpacity>
        <View style={estilo.info_ponto}>
            <Text>Último Registro: 18:02 16/06/2025</Text>
            <Text>Avenida Paulista, 2007 - São Paulo SP</Text>
            <Text>-20.256161616, -32.516156161561</Text>
        </View>
    </SafeAreaView>);
}
import { View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import { estilo } from "../assets/Formatacao";
import { useEffect, useState } from "react";


export default function Marcar(){

    const [horaAtual, atualizaHora] = useState('');

    useEffect(()=>{
        setInterval(()=> atualizaHora(pegaTempo()), 1000)
        //return () => clearInterval()
    }, [])
    

    function pegaTempo(){
        const agora = new Date();
        agora.setHours(agora.getUTCHours() - 3);
        const hora = String(agora.getHours()).padStart(2,'0')
        const minutos = String(agora.getMinutes()).padStart(2,'0')        
        return `${hora}:${minutos}`;
    }
    
    return(
    <SafeAreaView style={[estilo.tela, {justifyContent:'center', alignItems:'center'}]}>
        <Text style={estilo.hora_atual}>{horaAtual}</Text>
        <TouchableOpacity style={estilo.botao_ponto} onPress={()=>alert(horaAtual)}>
            <Text style={estilo.texto_botao_ponto}>BATER O PONTO</Text>
        </TouchableOpacity>
        <View style={estilo.info_ponto}>
            <Text>Último Registro: 18:02 16/06/2025</Text>
            <Text>Avenida Paulista, 2007 - São Paulo SP</Text>
            <Text>-20.256161616, -32.516156161561</Text>
        </View>
    </SafeAreaView>);
}
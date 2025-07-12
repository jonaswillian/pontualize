import { View, SafeAreaView, Text, Button, TouchableOpacity } from "react-native";
import { estilo } from "../assets/Formatacao";
import { useEffect, useState } from "react";
import GetLocation from "react-native-get-location";
import axios from "axios";

export default function Marcar({route}){

    const [local, setLocal] = useState(0)
    const [horaAtual, atualizaHora] = useState('');

    const funcionario = route.params

    // function pegaLocal(){
    //         GetLocation.getCurrentPosition({
    //     enableHighAccuracy: true,
    //     timeout: 60000,
    //     })
    //     .then(location => {
    //         setLocal(location)
    //     })
    //     .catch(error => {
    //         const { code, message } = error;
    //         console.warn(code, message);
    //     })
    // }

    useEffect(()=>{
        setInterval(()=> atualizaHora(pegaTempo()), 1000)
        //setInterval(pegaLocal, 5000)
        //return () => clearInterval()
    }, [])
    

    function pegaTempo(){
        const agora = new Date();
        agora.setHours(agora.getUTCHours() - 3);
        const hora = String(agora.getHours()).padStart(2,'0')
        const minutos = String(agora.getMinutes()).padStart(2,'0')        
        return `${hora}:${minutos}`;
    }

    function BaterPonto(){
        const agora2 = new Date()
        agora2.setHours(agora2.getUTCHours() - 3)
        const dataHoraISO = agora2.toISOString()
        return axios({
            method: "POST",
            type: "json",
            url: "http://10.55.49.38:3000/marcacao/cadastrar",
            data:{
                    "data": dataHoraISO,
                    "hora": dataHoraISO,
                    "latitude": 0.5646545646,
                    "longitude": 0.876131688,
                    "funcionarioId": funcionario.funcionario
            }
        })

        .then((resposta)=>alert('Ponto batido com sucesso'))
        .catch((error)=>console.log(error))
    }
    
    return(
    <SafeAreaView style={[estilo.tela, {justifyContent:'center', alignItems:'center'}]}>
        <Text style={estilo.hora_atual}>{horaAtual}</Text>
        <TouchableOpacity style={estilo.botao_ponto} onPress={BaterPonto}>
            <Text style={estilo.texto_botao_ponto}>BATER O PONTO</Text>
        </TouchableOpacity>
        <View style={estilo.info_ponto}>
            <Text>Último Registro: 18:02 16/06/2025</Text>
            <Text>Avenida Paulista, 2007 - São Paulo SP</Text>
            <Text>-20.256161616, -32.516156161561</Text>
        </View>
    </SafeAreaView>);
}
import { View, SafeAreaView, Image, Text, TextInput, Button } from "react-native";
import { estilo } from "../assets/Formatacao";
import Logo from "../assets/logo.png"
import { useState } from "react";
import axios from 'axios';

export default function Login({navigation}){

    const [matricula, gravaMatricula] = useState('')
    const [senha, gravaSenha] = useState('')

    function logar(){
        return axios({
            method: "GET",
            url:"http://10.55.49.38:3000/usuarios/selecionar/"+matricula+"",
        })
        .then((resposta)=>{
            if (typeof(resposta.data.id)=="number")
                navigation.navigate("Marcar", {funcionario:resposta.data.id})
            else
                alert ('Dados de login incorretos')
        })
        .catch((error)=> console.log(error))
    }

    return(
    <SafeAreaView style={estilo.tela}>
        <Image source={Logo} style={estilo.logotipo} />
        <Text style={estilo.slogan}>NÃO DURMA NO PONTO!</Text>
        <View style={estilo.form_login}>
            <TextInput 
                placeholder="Matrícula" 
                style={estilo.campo_login} 
                keyboardType="numeric"
                value={matricula}
                onChangeText={(matricula)=>gravaMatricula(matricula)} />
            <TextInput 
                placeholder="Senha" 
                style={estilo.campo_login}
                value={senha}
                onChangeText={(senha)=>gravaSenha(senha)} />
            <Button title="Entrar" style={estilo.botao_login} onPress={logar} />
        </View>
    </SafeAreaView>
    );
}
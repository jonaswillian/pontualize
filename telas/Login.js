import { View, SafeAreaView, Image, Text, TextInput, Button } from "react-native";
import { estilo } from "../assets/Formatacao";
import Logo from "../assets/logo.png"

export default function Login(){
    return(
    <SafeAreaView style={estilo.tela}>
        <Image source={Logo} style={estilo.logotipo} />
        <Text style={estilo.slogan}>NÃO DURMA NO PONTO!</Text>
        <View style={estilo.form_login}>
            <TextInput placeholder="Matrícula" style={estilo.campo_login} keyboardType="numeric" />
            <TextInput placeholder="Senha" style={estilo.campo_login} />
            <Button title="Entrar" style={estilo.botao_login} />
        </View>
    </SafeAreaView>
    );
}
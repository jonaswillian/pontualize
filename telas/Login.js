import { View, SafeAreaView, Image, Text } from "react-native";
import { estilo } from "../assets/Formatacao";
import Logo from "../assets/logo.png"

export default function Login(){
    return(
    <SafeAreaView style={estilo.tela}>
        <Image source={Logo} style={estilo.logotipo} />
        <Text style={estilo.slogan}>NÃO DURMA NO PONTO!</Text>
    </SafeAreaView>
    );
}
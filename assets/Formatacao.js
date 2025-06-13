import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela:{
        backgroundColor:'#fff',
        borderStyle:"dotted",
        borderColor:'#40c188',
        borderWidth:20,
        flex:1,
        padding:50
    },
    logotipo:{
        width:280,
        resizeMode:"none",
        position:"absolute",
        top:'20%',
        left:'20%'
        
    },
    slogan:{
        position:"absolute",
        top:'57%',
        left:'24%',
        fontSize:22,
        fontWeight:'bold'
    }
})
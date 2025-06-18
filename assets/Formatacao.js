import { StyleSheet } from "react-native";

export const estilo = StyleSheet.create({
    tela:{backgroundColor:'#fff', flex:1, padding:30},

    // PÁGINA INICIAL
    logotipo:{width:280, resizeMode:"none", position:"absolute", top:'20%', left:'20%'},
    slogan:{position:"absolute", top:'48%', left:'24%', fontSize:22, fontWeight:'bold', color:'#459dd9'},
    form_login:{position:"relative", marginTop:450},
    campo_login:{marginBottom:30, padding:15, backgroundColor:"#f1f1f1", height:55},

    // PÁGINA MARCAÇÃO DE PONTO
    hora_atual:{fontSize:100, position:'relative', fontWeight:'bold'},
    botao_ponto:{backgroundColor:'#40c188', padding:20, width:300, marginTop:50},
    texto_botao_ponto:{textAlign:'center', color:'#fff', fontWeight:'bold', fontSize:20},
    info_ponto:{marginTop:20, alignItems:'center'},

    // PÁGINA LISTA DE REGISTROS
    quadro_horarios:{marginTop:15, paddingBottom:15, borderBottomWidth:1, borderBottomColor:'#ccc'},
    titulo_horarios:{color:'#459dd9', fontWeight:'bold', fontSize:16},
    label_horarios:{fontWeight:'bold'},
    valor_horarios:{fontWeight:'normal'},

    //PÁGINA SUPORTE
    area_suporte: {marginBottom: 30},
    area_suporte_titulo: {fontSize: 18, fontWeight: '600', marginBottom: 10},
    link_suporte: {fontSize: 16, color: '#007bff', marginBottom: 5},
    mapa_suporte: {width: '100%', height: 200, borderRadius: 10},
})
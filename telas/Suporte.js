import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Linking, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { estilo } from '../assets/Formatacao';

export default function Suporte() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ScrollView style={estilo.tela}>
      <View style={estilo.area_suporte}>
        <Text style={estilo.area_suporte_titulo}>📞 Contato</Text>
        <Text style={estilo.link_suporte} onPress={() => Linking.openURL('tel:+551199999999')}>
          Telefone: +55 (11) 99999-9999
        </Text>
        <Text style={estilo.link_suporte} onPress={() => Linking.openURL('mailto:suporte@empresa.com')}>
          E-mail: suporte@empresa.com
        </Text>
      </View>

      <View style={estilo.area_suporte}>
        <Text style={estilo.area_suporte_titulo}>📝 Enviar uma Mensagem</Text>
        <TextInput
          style={[estilo.campo_login, { marginBottom: 10 }]}
          placeholder="Seu nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[estilo.campo_login, { marginBottom: 10 }]}
          placeholder="Seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={[estilo.campo_login, { height: 100, marginBottom: 10 }]}
          placeholder="Escreva sua dúvida ou solicitação"
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Button title="Enviar" />
      </View>

      <View style={estilo.area_suporte}>
        <Text style={estilo.area_suporte_titulo}>📍 Nossa Localização</Text>
        <MapView
          style={estilo.mapa_suporte}
          initialRegion={{
            latitude: -23.55052,
            longitude: -46.633308,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          <Marker
            coordinate={{ latitude: -23.55052, longitude: -46.633308 }}
            title="Empresa Exemplo"
            description="Nossa sede"
          />
        </MapView>
      </View>

      <View style={estilo.area_suporte}>
        <Text style={estilo.area_suporte_titulo}>❓ Links Úteis</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://empresa.com/faq')}>
          <Text style={estilo.link_suporte}>FAQ - Perguntas Frequentes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://empresa.com/politica-privacidade')}>
          <Text style={estilo.link_suporte}>Política de Privacidade</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://empresa.com/termos')}>
          <Text style={estilo.link_suporte}>Termos de Uso</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

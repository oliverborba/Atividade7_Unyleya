import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, KeyboardAvoidingView } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native"
import Axios from 'axios';

export default props => {

  const [colect, setColects] = useState([]);

  const route = useRoute();

  useEffect(() => {
    Axios.get("http://10.0.2.2:3000/colections").then((res) => {
      setColects(res.data)
    }).catch((erro) => alert("Erro ao requisitar produto " + erro))
  }, [route.params?.res])

  const navigation = useNavigation();

  return (

    <FlatList
      style={{ padding: 20 }}
      keyExtractor={(item, index) => item.id.toString()}
      data={colect}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("Editar", { colect: item })} style={{ flexDirection: "row", backgroundColor: "lightgrey", marginBottom: 5 }}>
          <Image
            source={{ uri: item.img ? item.img : null }}
            style={{ width: 100, height: 100, margin: 10 }} />

          <View style={{ paddingHorizontal: 10, marginTop: 10 }}>
            <Text>Titulo: {item.titulo}</Text>
            <Text>Genero: {item.genero}</Text>
            <Text>Desenvolvedor: {item.desenvolvedor}</Text>
            <Text>Console: {item.console}</Text>
            <Text>Lancamento: {item.lancamento}</Text>
          </View>
        </TouchableOpacity>
      )} />
  )
}
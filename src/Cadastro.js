import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, Button, TouchableOpacity, Text, StyleSheet, Animated, Keyboard, } from 'react-native';
import * as ImagePicker from "react-native-image-picker"

import { useNavigation, useRoute } from "@react-navigation/native";

import Axios from "axios";

const Cadastro = () => {
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [desenvolvedor, setDesenvolvedor] = useState('');
  const [console, setConsole] = useState('');
  const [lancamento, setLancamento] = useState('');
  const [img, setImg] = useState('');

  const navigation = useNavigation();

  useEffect(() => {

  }, [])

  const saveProduct = () => {

    if (titulo.trim() === "") {
      alert("Titulo não pode estar vazio")
    } else {
      Axios.post("http://10.0.2.2:3000/colections/", {
        titulo,
        genero,
        desenvolvedor,
        console,
        lancamento,
        img
      }).then((res) => {
        alert("Salvo com sucesso!")
        navigation.navigate("Home", { res })
      }).catch(() => alert("Erro ao salvar"))
    }
  }

  const deleteProduct = () => {
    Axios.delete("http://10.0.2.2:3000/colections/" + id).then((res) => {
      alert("Deletado com sucesso!")
      navigation.navigate("Home", { res })
    }).catch(() => alert("Erro ao Deletar"))
  }

  useEffect(() => { }, []);

  return (

    <View style={styles.background}>
      <Image source={{ uri: img ? img : null }} style={styles.imagem} />
      <TouchableOpacity onPress={() => ImagePicker.launchImageLibrary({}, (res) => setImg(res.uri))}>
        <Text style={styles.logo} >Carregar Imagem</Text>
      </TouchableOpacity>

      <TextInput
        value={titulo} onChangeText={(txt) => setTitulo(txt)} placeholder="Titulo" style={styles.textInput} />
      <TextInput value={genero} onChangeText={(txt) => setGenero(txt)} placeholder="Genero" style={styles.textInput} />
      <TextInput value={desenvolvedor} onChangeText={(txt) => setDesenvolvedor(txt)} placeholder="Desenvolvedor" style={styles.textInput} />
      <TextInput value={console} onChangeText={(txt) => setConsole(txt)} placeholder="Console" style={styles.textInput} />
      <TextInput value={lancamento} onChangeText={(txt) => setLancamento(txt)} placeholder="Lançamento" style={styles.textInput} />
      <View style={styles.box}>
        <Button title="Cadastrar" onPress={saveProduct} />
      </View>
    </View >
  )
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#191919',
  },
  logo: {
    color: 'black',
    backgroundColor: 'lightgrey',
    borderRadius: 3,
    padding: 5,
    marginTop: 3
  },
  imagem: {
    flex: 1,
    marginTop: 10,
    width: 150,
    height: 150,
    borderRadius: 5,
    borderColor: "#5a5a5a",
    borderWidth: 1,
  },
  textInput: {
    fontSize: 16,
    marginTop: 5,
    backgroundColor: "#FFF",
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  box: {
    flex: 1,
    marginTop: 5,
    marginHorizontal: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
})
export default Cadastro;
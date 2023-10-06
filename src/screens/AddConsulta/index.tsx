import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

export default function AddConsulta() {
    const navigation = useNavigation()
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [dataNasc, setDataNasc] = useState("")
    const [endereco, setEndereco] = useState("")
    const [telefone, setTelefone] = useState("")
    const [valor, setValor] = useState("900")
    const [dados, setDados] = useState<string[]>([])


    function handleSubmit() {
        setDados([nome, cpf, dataNasc, endereco, telefone, valor])
        console.log("Nome: " + nome + "\n" +
            "CPF: " + cpf + "\n" +
            "Data de Nascimento: " + dataNasc + "\n" +
            "Endereço: " + endereco + "\n" +
            "Telefone: " + telefone + "\n" +
            "Valor: " + valor + "\n");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MedNote</Text>
            <AntDesign name="heart" size={80} color="#F00" style={{ margin: 15, marginBottom: 40 }} />

            <Text style={styles.subtitle}>Preencha seus dados para a consulta</Text>
            <TextInput style={styles.input} placeholder="Nome Completo" value={nome} onChangeText={(e) => setNome(e)}></TextInput>
            <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={(e) => setCpf(e)}></TextInput>
            <TextInput style={styles.input} placeholder="Data de Nascimento" value={dataNasc} onChangeText={(e) => setDataNasc(e)}></TextInput>
            <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={(e) => setEndereco(e)}></TextInput>
            <TextInput style={styles.input} placeholder="Telefone para contato" value={telefone} onChangeText={(e) => setTelefone(e)}></TextInput>
            <TextInput style={styles.input} value={"Valor da consulta: R$" + valor} ></TextInput>


            <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
                <Text style={styles.btnText}>Agenda</Text>
            </TouchableOpacity>
        </View>
    )
}
import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
export default function Agenda() {
    const navigation = useNavigation()
    const data= [
        {
            nome: "Matheus Machado",
            cpf: "123.456.789-00",
            dataNasc: "20/09/2005",
            endereco: "Servidão Luiz Duarte, 330",
            telefone: "(48) 9 9999-9999",
            valor: "900"
        },
        {
            nome: "Vinícius Anunciação",
            cpf: "987.654.321-99",
            dataNasc: "20/06/2002",
            endereco: "Servidão Manoel Dutra, 122",
            telefone: "(48) 9 8888-8888",
            valor: "900"
        },
        {
            nome: "Vitor Toazza",
            cpf: "135.791.357-91",
            dataNasc: "11/12/2000",
            endereco: "Rua do Açude, 87",
            telefone: "(48) 9 7777-7777",
            valor: "900"
        },
        {
            nome: "Manoel Dutra",
            cpf: "632.146.228-88",
            dataNasc: "09/02/1943",
            endereco: "Rua Desembargador Paulo Alves, 976",
            telefone: "(48) 9 6666-6666",
            valor: "800"
        },
        {
            nome: "Caio Trauczynski",
            cpf: "010.020.030-99",
            dataNasc: "22/04/2010",
            endereco: "Rua Brisamar, 332",
            telefone: "(48) 9 5555-5555",
            valor: "900"
        }
    ]

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MedNote</Text>
            <AntDesign name="heart" size={80} color="#F00" style={{ margin: 15, marginBottom: 40 }}/>
            <Text style={styles.subtitle}>Consultas Agendadas:</Text>
            <FlatList
            contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
            style={styles.list} 
            data={data}
            renderItem={(
                ({item}) => (
                    <View style={styles.consulta}>
                        <Text>Nome: {item.nome}</Text>
                        <Text>CPF: {item.cpf}</Text>
                        <Text>Data de nascimento: {item.dataNasc}</Text>
                        <Text>Endereço: {item.endereco}</Text>
                        <Text>Telefone: {item.telefone}</Text>
                        <Text>Valor: {item.valor}</Text>
                    </View>
                )
            )}/>
        </View>
    )
}
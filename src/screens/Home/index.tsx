import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useNavigation } from '@react-navigation/native'
import AddConsulta from "../AddConsulta";
import Agenda from "../Agenda";
import { AntDesign } from '@expo/vector-icons';

export default function Home() {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>MedNote</Text>
            <AntDesign name="heart" size={80} color="#F00" style={{ margin: 15, marginBottom: 40 }}/>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(AddConsulta)}>
                <Text style={styles.btnText}>Adicionar Consulta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate(Agenda)}>
                <Text style={styles.btnText}>Agenda</Text>
            </TouchableOpacity>
        </View>
    )
}
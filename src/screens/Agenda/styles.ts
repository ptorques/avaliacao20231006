import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 40
    },
    title: {
        fontSize: 50,
        fontStyle: "italic",
        fontWeight: "bold",
    },
    subtitle: {
      fontSize: 17
    },
    btn: {
        backgroundColor: "#F00",
        fontSize: 14,
        width: "60%",
        margin: 10,
        padding: 20,
        marginBottom: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    btnText: {
        color: "#FFF",
        fontSize: 15
    },
    input: {
      width: "80%",
      padding: 15,
      paddingHorizontal: 20,
      backgroundColor: "#FFF",
      margin: 10,
      borderRadius: 5
    },
    consulta: {
        margin: 10,
        width: 300,
        backgroundColor: "#FFF",
        borderRadius: 5,
        padding: 10
    },
    list: {
        width: "100%",
    }
  });
  
export default styles;
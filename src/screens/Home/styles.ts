import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEE',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontStyle: "italic",
        fontWeight: "bold",
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
    }
  });
  
export default styles;
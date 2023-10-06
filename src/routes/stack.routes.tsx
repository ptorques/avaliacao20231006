import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import AddConsulta from "../screens/AddConsulta";
import Agenda from "../screens/Agenda";
const { Screen, Navigator } = createNativeStackNavigator()


export function StackRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen
                name="Home"
                component={Home}
                options={{
                    title: "Home"
                }}
            />
            <Screen
                name="AddConsulta"
                component={AddConsulta}
                options={{
                    title: "Adicionar Consulta",
                }}
            />
            <Screen
            name="Agenda"
            component={Agenda}
            options={{
                title: "Agenda",
            }}
        />
        </Navigator>
    )
}
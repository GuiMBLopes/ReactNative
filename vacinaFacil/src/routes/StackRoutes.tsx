import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabRoutes } from "./Tabs/TabsRoute"
import { CadastroLocal } from "../pages/CadastroLocal"
import CadastroUser from "../pages/CadastroUser"
import { Login } from "../pages/Login"

const Stack = createNativeStackNavigator()

export const StackRoutes = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabRoutes} options={{headerShown:false}}/>
            <Stack.Screen name="StackCadastroLocal" component={CadastroLocal} options={{headerShown:false}}/>
            <Stack.Screen name="StcakCadastroUser" component={CadastroUser} options={{headerShown:false}}/>
            <Stack.Screen name="StcakLogin" component={Login} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
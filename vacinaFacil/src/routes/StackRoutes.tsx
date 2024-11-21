import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabRoutes } from "./Tabs/TabsRoute"
import { CadastroLocal } from "../pages/CadastroLocal"
import CadastroUser from "../pages/CadastroUser"

const Stack = createNativeStackNavigator()

export const StackRoutes = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabRoutes} options={{headerShown:false}}/>
            <Stack.Screen name="StackCadastroLocal" component={CadastroLocal} options={{headerShown:false}}/>
            <Stack.Screen name="StcakCadastroUser" component={CadastroUser} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
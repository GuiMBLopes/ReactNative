import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { TabRoutes } from "./Tabs/TabsRoute"

const Stack = createNativeStackNavigator()

export const StackRoutes = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen name="Animal" component={TabRoutes} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
}
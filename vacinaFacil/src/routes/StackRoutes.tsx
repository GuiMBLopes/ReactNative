import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TabRoutes } from "./Tabs/TabsRoute";
import { CadastroLocal } from "../pages/CadastroLocal";
import { Login } from "../pages/Login";
import Perfil from "../pages/Perfil";
import { CadastroUser } from "../pages/CadastroUser";

const Stack = createNativeStackNavigator();

export const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StackCadastroLocal"
        component={CadastroLocal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StcakCadastroUser"
        component={CadastroUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StcakLogin"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StackProfile"
        component={Perfil}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

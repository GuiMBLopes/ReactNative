import { NavigationContainer } from "@react-navigation/native"
import { StackRoutes } from "./StackRoutes"
import { AuthProvider } from "../hooks/useAuth"

export const Routers = () => {
    return(
        <NavigationContainer>
            <AuthProvider>
            <StackRoutes/>
            </AuthProvider>
        </NavigationContainer>
    )
}
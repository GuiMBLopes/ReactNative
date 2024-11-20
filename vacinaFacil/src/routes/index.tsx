import { NavigationContainer } from "@react-navigation/native"
import { StackRoutes } from "./StackRoutes"

export const Routers = () => {
    return(
        <NavigationContainer>
            <StackRoutes/>
        </NavigationContainer>
    )
}
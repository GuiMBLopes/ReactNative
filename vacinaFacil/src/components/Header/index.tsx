import { Image, Text, View } from "react-native"
import Logo from "../../assets/Logo.png"
import { Icon } from "react-native-elements"
import { style } from "./style"

export const Header = () => {
    return(
        <View style={style.container}>
            <Icon name="chevron-back-outline" type="ionicon" size={50} color={"#fff"} style={{top:5}}/>
                <Image source={Logo} style={style.logo}/>
                <Text style={style.text}>
                    Seja bem vindo, ADM
                </Text>
            </View>
    )
}
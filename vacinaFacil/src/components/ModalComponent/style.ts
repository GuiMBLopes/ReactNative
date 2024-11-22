import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        backgroundColor:"#13293D",
        width:"100%",
        height:"30%",
        justifyContent:"center",
        borderRadius:15,
        top:600
    },
    card:{
        width:"100%",
        alignContent:"center",
        justifyContent:"center"
    },
    row:{
        flexDirection:"row",
        marginTop:30
    },
    sim:{
        width:"50%",
        backgroundColor:"green",
        borderRadius:20,
        paddingVertical:20
    },
    nao:{
        width:"50%",
        backgroundColor:"red",
        borderRadius:20,
        paddingVertical:20
    }
})
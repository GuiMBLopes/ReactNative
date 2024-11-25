import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"flex-end",
        borderRadius:15,
    },
    card:{
        height:"30%",
        width:"100%",
        alignContent:"center",
        justifyContent:"center",
        backgroundColor:"#13293D",
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
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    card:{
        justifyContent: 'space-evenly',
        backgroundColor:"#FFF",
        width:"100%",
        height:200,
        borderRadius:10,
        elevation: 8,
        marginBottom:15,
        paddingBottom: 20
    },
    cardText:{
        width:"80%"
    },
    title:{
        fontSize:20,
        paddingLeft:10,
        fontFamily:"Montserrat",
        color:"#1B98E0",
        fontWeight:"bold"
    },
    subTitle:{
        fontSize:15,
        paddingLeft:20,
        fontFamily:"Nunito",
        fontWeight:"bold"
    },
    local:{
        width:"90%",
        flexDirection:"row",
        paddingLeft:10,

    },
    localText:{
        fontSize:17,
        color:"#1B98E0",
        
    },
    row:{
        flexDirection:"row",
        top:15,
        justifyContent:"space-between",
    },
    rowDate:{
        width:"60%",
        paddingLeft:10,
    },
    rowDateText:{
        fontSize:12,
    },
    rowTime:{
        width:"40%",
        alignItems:"center"
    },
    rowTimeText:{
        fontSize:12
    }
})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      overflow: 'hidden',
      width: '100%'
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 15,
      backgroundColor: '#ddd',
      width: '100%'
    },
    cardTitle: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    cardContent: {
      overflow: 'hidden',
      backgroundColor: '#ddd',
      paddingHorizontal: 15,
    },
    cardText: {
      fontSize: 14,
      marginTop: 10
    },

    boxButton:{
      width: '100%',
      alignItems: 'center',
      marginTop: 20
    },

    areaButton:{
      width: '40%'
    }
  });
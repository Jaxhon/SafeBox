import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    titleText:{
      margin: 15,
      fontSize:42, fontWeight: 'bold',
      color: 'rgb(8,8,8)', alignSelf: 'center',
    },

    inputTitle:{
      margin: 8,
      fontSize:20, 
      color: 'rgb(8,8,8)', alignSelf: 'center',
    },
    inputField:{
      alignSelf: 'center',
      borderWidth: 1,
      borderColor: 'gray',
      paddingHorizontal: 12,
      paddingVertical: 8,
      margin: 10,
      height: 50,
      width: 200,
      backgroundColor: 'white',
      borderRadius: 5,
      shadowRadius: 50,
      shadowColor: 'black',
    },
    buttonStandard:{
        height: 50,
        width: 200,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        color: 'white',
        backgroundColor: 'olivedrab',
    },
    buttonText:{
        alignSelf: 'center',
        fontSize:18, 
        color: 'white',
        
    },

    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        
      },
      logo:{
        flex: 0, 
        alignContent: 'stretch',
        width: 100,
        height: 100,
        resizeMode: 'contain'
      },

});
import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topContainer: {
        flex: 1.2
    },
    bottomContainer: {
        flex: 2, 
        backgroundColor:'black', 
        borderTopWidth:1, 
        borderTopColor:'white' 
    },
    bottomNumberContainer:{
        flex:1, 
        flexDirection:"row", 
        alignItems:"center", 
        justifyContent:"space-evenly",
    },
    buttonContainer: {
        borderWidth:1, 
        borderColor:'white', 
        height:75, 
        width:75, 
        borderRadius:75/2, 
        justifyContent:"center", 
        alignItems:"center"
    },
    buttonText: {
        color:'white', 
        fontSize: 35
    }
});

export default AppStyle;

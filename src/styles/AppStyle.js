import { StyleSheet } from 'react-native';

const AppStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    topContainer: {
        flex: 1
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
        justifyContent:"space-evenly"
    }
});

export default AppStyle;

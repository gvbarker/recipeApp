import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({

    recipeContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
    },
    
    titles:{
        marginTop: '30%',
        width: '100%',
        alignItems: 'center'
    },
    
    title:{
        fontSize: 40, 
        fontWeight: 'bold',
    },
    
    subtitle:{
        fontSize: 16,
        color: 'bold'
    },
    
    image:{
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute'
    },

    buttonContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%'
    }
});

export default styles;
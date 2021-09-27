import { StyleSheet } from "react-native";

const inicioStyle = StyleSheet.create({
    imgLogo:{
        height: 290,
        width:'auto',
        resizeMode: 'stretch',
    },
    imgHeader:{
        height: 130,
        width:'auto',
        resizeMode: 'stretch',
    },
    bottomLogin:{
        marginTop:50,
        width:'75%',
        height:50,
        display:'flex',
        justifyContent:"center",
        backgroundColor:'#1CA6CE',
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },
    textBottomColor:{
        color:'white',
    },
    contentBottomLogin:{
        alignItems:'center',
        marginBottom:35,
    },
    recuperarContent:{
        display:"flex",
        alignItems:"center",
        marginBottom:30,
    },
    recuperarContraseña:{
        textDecorationLine:'underline',
        fontWeight:'600',
    },
    registrarContent:{
        display:"flex",
        justifyContent:"center",
        flexDirection:'row',
    },
    registrar:{
        fontWeight:'700',
    },
    contentInputs:{
        height:'100%',
        display:'flex',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',
       
    },
    contentInput:{
        backgroundColor:'#565656',
        marginTop:10,
        width:'75%',
    },
    inputText:{
        opacity:1,
        height:50,
        width:200,
        color:'white', 
        
    }
})

export default inicioStyle;
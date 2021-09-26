import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import inicioStyle from '../styles/inicioStyle';

export const Inicio = () => {
    let imageTop = '../assets/header.png';
    let logoApiUbademy = '../assets/ubademyLogo.png';
    let navegarLoguin = () =>{

    }
    return (
        <View>
            <Image 
                style={inicioStyle.imgHeader}
                source={require(imageTop)} />
            <Image 
                style={inicioStyle.imgLogo}
                source={require(logoApiUbademy)} />
            <View 
                style={inicioStyle.contentBottomLogin}
            >
                <TouchableOpacity 
                    style={inicioStyle.bottomLogin}
                    onPress={()=>{console.log("ddfe")}}
                >
                        <Text style={inicioStyle.textBottomColor}>LOGUIN</Text>
                </TouchableOpacity>    
            </View>
            <View 
                style={inicioStyle.recuperarContent}
            >
                <Text style={inicioStyle.recuperarContraseña}>Recuperar contraseña</Text>    
            </View>
            <View 
                style={inicioStyle.registrarContent}
            >
                <Text>¿No tienes cuenta?</Text>
                <Text style={inicioStyle.registrar}> Registrate</Text>    
            </View>
            
        </View>
    )
}

import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import inicioStyle from '../styles/inicioStyle';
interface Props extends StackScreenProps<any,any>{

    };
export const Inicio = ({navigation}:Props) => {
    let imageTop = '../assets/header.png';
    
    let logoApiUbademy = '../assets/ubademyLogo.png';
    let navegarLoguin = () => navigation.navigate('Login')
    let navigateRegistro = () => navigation.navigate('Registro')
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
                    onPress={navegarLoguin}
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
                <Text 
                    style={inicioStyle.registrar}
                    onPress={navigateRegistro}
                > Registrate</Text>    
            </View>
            <View>
                
            </View>
        </View>
    )
}

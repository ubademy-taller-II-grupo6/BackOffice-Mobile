import { Image, View } from "react-native"
import inicioStyle from "../styles/inicioStyle";

export const Loguin = () => {
    let imageTop = '../assets/header.png';
    let logoApiUbademy = '../assets/ubademyLogo.png';
    return (
        <View>
           <Image 
                style={inicioStyle.imgLogo}
                source={require(logoApiUbademy)} /> 
        </View>
    )
}

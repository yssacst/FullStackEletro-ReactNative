import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = (props) => {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image  style={styles.logo} source={require('../img/logo_branco.png')}/>
                </View>
                <Text style={styles.paragrafo}>Seja bem vindo(a)!
                    Aqui em nossa loja, programadores tem desconto nos eletrônicos para sua casa!
                </Text>
                <View style={styles.footer}>
                    <Text style={styles.labelFooter}>FullStackEletro by Rayssa Costa</Text>
                </View>
            </View>
        );
};

export default Home


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        textAlign:'center',
    },
    paragrafo:{
        textAlign:'center',
        color:'gray',
        marginTop:'50%',
    },
    logo: {
        width: 80,
        height: 38,
    },
    header:{
        backgroundColor:'red',
        height:60,
        top:0,
        marginTop:0,
        width:'100wv',
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        backgroundColor:'red',
        color:'white',
        height:20,
        bottom:0,
        position:'absolute',
        width:'100%'
    },
    labelFooter:{
        color:'white',
        fontWeight:'bold',
    }
})
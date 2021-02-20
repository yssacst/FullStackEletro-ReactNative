import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking, TextInput, Button } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

const Login = ({ navigation }) => {
    return (
            <View style={styles.container}>
                    <Image  style={styles.logo} source={require('../img/logo_branco.png')}/>
              
                    <View style={styles.frm}>
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input} placeholder="Email" />

                        <Text style={styles.label}>Senha</Text>
                        <TextInput style={styles.input} placeholder="Senha" />
                        
                        <Button
                        onPress={() => navigation.navigate('Home')}
                        title="Login"
                        />
                    </View>
            </View>
        );
};

export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "red",
        textAlign:'center',
    },
    logo: {
        width: 160,
        height: 78,
    },
    frm:{
        textAlign:'center',
        backgroundColor:'#fff',
        width:'70%',
        height:280,
        padding:20,
        paddingTop:'auto', 
        paddingBottom:'auto',  
        borderStyle:'solid',
        borderColor:'white',
        borderRadius:5,
        borderWidth:1,
        marginTop:15,
    },
    label: {
        fontSize:20,
        color:'red',
        fontWeight:'bold',
    },
    input:{
        color: 'red',
        height:50,
        backgroundColor:'white',
        borderRadius:5,
        borderColor:'red',
        borderWidth:2,
        borderStyle:'solid',
        margin:10,
    },
    
})
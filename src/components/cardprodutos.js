import React from 'react';
import { Text, View, StyleSheet, Image} from "react-native";

const CardProdutos = (props) =>{
    
    return (
            <View style={styles.cardprodutos}>
            <Image  style={styles.logo} source={props.img}/>
                {/* <Image style={styles.logo} source={require('../img/lava_loucas_febe_300x300.jpg')}/> */}

                <Text style={styles.descricao}>{props.data.descricao}</Text>                
                <Text style={styles.precoPromo}>R$ {props.data.preco_venda}</Text>  
                <Text style={styles.descricao}><strike>R$ {props.data.preco}</strike></Text>        
            </View>
        );
}

export default CardProdutos;


const styles = StyleSheet.create({
    cardprodutos: {
        borderStyle:'solid',
        borderColor:'red',
        borderWidth:1,
    },
    descricao:{
        color:'grey',
    },
    precoPromo:{
        fontSize:20,
        color:'red',
        fontWeight:'bold'
    },
    logo:{
        width:300,
        height:300
    }
});
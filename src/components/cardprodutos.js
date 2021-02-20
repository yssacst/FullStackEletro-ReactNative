import React from 'react';
import { Text, View, FlatList, StyleSheet, Image} from "react-native";

const CardProdutos = (props) =>{
    return (
            <View style={styles.cardprodutos}>
                <Image  style={styles.logo} source={require(`../img/${props.data.nome_imagem}`)}/>
                <Text>{props.data.descricao}</Text>                
                <Text>{props.data.preco}</Text>  
                <Text>{props.data.precovenda}</Text>        
                <Text>{`../img/${props.data.nome_imagem}`</Text>
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
});
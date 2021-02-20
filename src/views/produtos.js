import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity, Linking, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CardProdutos from '../components/cardprodutos';

const Produtos = (props) => {
    const dados = [
            {
            id_produtos: 1,
            descricao: 'Geladeira Consul Frost Free Duplex 397 litros Evox com freezer embaixo',
            preco: 3479,
            preco_venda: 2709,
            nome_imagem: require('../img/Consul_Geladeira_CRE44AK_Imagem_Frontal_1.jpg')
            },
            {
            id_produtos: 2,
            descricao: 'Geladeira Brastemp Frost Free Duplex 375 litros cor Inox com Espaço Adapt',
            preco: 3479,
            preco_venda: 2249.1,
            nome_imagem: require('../img/Brastemp_Geladeira_BRM45HK_Imagem_Frontal_1600x1400.jpg')
            },
            {
            id_produtos: 3,
            descricao: 'Fogão de Piso Brastemp de 05 Bocas com Duplo Forno e Painel Touch Inox',
            preco: 4239,
            preco_venda: 3932,
            nome_imagem: require('../img/BRBFD5VCR_PRD_447_1.jpg')
            },
            {
            id_produtos: 4,
            descricao: 'Forno de Micro-ondas Electrolux ME41X com Painel Blue Touch 31 Litros',
            preco: 1259,
            preco_venda: 999,
            nome_imagem: require('../img/forno-de-micro-ondas-31l-electrolux-me41x_211417_7.jpg')
            },
            {
            id_produtos: 5,
            descricao: 'Refrigerador Brastemp BRM44HB Frost Free com Compartimento para Latas e Long Necks Branco - 375L',
            preco: 2499,
            preco_venda: 2089.05,
            nome_imagem: require('../img/Geladeira Brastemp Frost Free Duplex BRM44HB 375L Branco.jpg')
            },
            {
            id_produtos: 6,
            descricao: 'Lava-Louças Electrolux LV14X 14Serviços com Display Digital - Inox',
            preco: 4349,
            preco_venda: 3914.1,
            nome_imagem: require('../img/lava-loucas-14-servicos-electrolux-lv14x-inox-photo892601426-12-2c-17.jpg')
            },
            {
            id_produtos: 7,
            descricao: 'Lava Louças 8 Serviços 220V Cinza Brastemp',
            preco: 2129,
            preco_venda: 2063,
            nome_imagem: require('../img/lava_loucas_febe_300x300.jpg')
            },
            {
            id_produtos: 8,
            descricao: 'Lavadora de Roupas LG Smart VC4 FV5011WG4A - 11Kg Cesto Inox 14 Programas de Lavagem',
            preco: 3599,
            preco_venda: 2825.1,
            nome_imagem: require('../img/Lavadora de Roupas LG Vivace VC4 11kg Branca.jpg')
            },
            {
            id_produtos: 9,
            descricao: 'Lava e Seca Samsung WD4000 com Ecobubble™, 11kg, Inox - WD11M4453JXFAZ 220V',
            preco: 4499,
            preco_venda: 3599.1,
            nome_imagem: require('../img/lavadora-e-secadora-de-roupas-samsung-11kg-air-wash-e-ecobubble-branca.jpg')
            },
            {
            id_produtos: 10,
            descricao: 'Fogão de Piso Electrolux de 05 Bocas com Mesa de Vidro e Tripla Chama Prata - 76USV',
            preco: 2849,
            preco_venda: 2149,
            nome_imagem: require('../img/Range_76USV_Front_View_Electrolux_1000x1000.jpg')
            }
        ]
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image  style={styles.logo} source={require('../img/logo_branco.png')}/>
                </View>
                
                <FlatList 
                    data={dados}
                    keyExtractor={(item) => `${item.id_produtos}`}
                    renderItem={({item}) => (
                    <View >
                        <CardProdutos data={item} img={item.nome_imagem}/>
                    </View>
                    )}/>
                    
                <View style={styles.footer}>
                    <Text style={styles.labelFooter}>FullStackEletro by Rayssa Costa</Text>
                </View>
            </View>
        );
};

export default Produtos


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        textAlign:'center',
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
})

import { StyleSheet, Text, View, StatusBar, Image, SafeAreaView, Pressable, ScrollView } from 'react-native';
import React from 'react';
import { Feather, AntDesign } from 'react-native-vector-icons/';
import { useNavigation } from '@react-navigation/native'



export default function App() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.comp1}>
                <View style={styles.areaicone}>
                    <AntDesign name="user" size={80} />
                </View>

                <View style={styles.areatexto}>
                    <Text style={styles.subtitulo}>
                        Nome do cliente
                    </Text>
                    <Pressable onPress={() => navigation.navigate('Configuracao')}>
                        <Text style={{ color: '#696969', }}>
                            Gerenciar dados pessoais
                        </Text>
                    </Pressable>
                </View>
            </View>
            <ScrollView>
                <View style={styles.corpo}>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                    DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>
                    </View>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>


                    </View>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>
                    </View>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>
                    </View>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>
                    </View>

                    <View style={styles.comp1}>
                        <View style={styles.areatexto}>
                            <View style={styles.alinhar}>
                                <Image style={styles.imagem} source={require('../../assets/logo.png')}
                                />
                                <Text style={styles.texto}>
                                DESCRIÇÃO DO PRODUTO
                                </Text>
                            </View>
                        </View>


                        <View style={styles.areaicone2}>

                            <Pressable onPress={() => navigation.navigate('Carrinho')}>
                                <Feather style={styles.icone} name="shopping-cart" size={30} />
                            </Pressable>

                        </View>
                    </View>


                </View>

                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.navigate('Carrinho')}
                >
                    <Text style={styles.buttonText}>Finalizar Compra</Text>
                </Pressable>
            </ScrollView>






        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',

    },
    comp1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
        height: "15%",
        padding: 10,
        marginBottom: 15,

    },
    subtitulo: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    areatexto: {
        flex: 1,
        flexDirection: "column",
        textAlign: 'justify',

    },
    areaicone: {
        width: 120,
        marginLeft: 20,
    },
    areaicone2: {
        flexDirection: 'row',
        margin: 5,
    },

    corpo: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
    },

    icone: {
        alignSelf: 'flex-end',
        width: '100%',
    },
    imagem: {

        flex: 1,
        height: 110,
        borderRadius: 10,




    },
    alinhar: {

        flexDirection: 'row',
        alignItems: 'center',

    },
    texto: {
        flex: 1,
        margin: 5,
        fontSize: 12,
        textAlign: 'justify',
    },
    button: {
        
        backgroundColor: '#CD788F',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        margintop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },

    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
    },
});

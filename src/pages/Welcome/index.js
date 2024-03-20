import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'

export default function Welcome() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.conteiner}>

            <View style={styles.conteinerLogo}>

                <Animatable.Image style={styles.logo}
                    animation='flipInY'
                    source={require('../../assets/logo.png')}
                    resizeMode="contain"
                />

            </View>

            <Animatable.View delay={600} animation='fadeInUp' style={styles.conteinerForm}>

                <Text style={styles.title}>Seja Bem Vindo a nossa Loja!</Text>
                <Text style={styles.text}>Continue para fazer o login ou se cadastrar!</Text>
                <Pressable
                 style={styles.button}
                 onPress={() => navigation.navigate('SingIn')}
                 >
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>

            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#CD788F',
    },

    conteinerLogo: {
        flex: 2,
        backgroundColor: '#CD788F',
        justifyContent: 'center',
        alignItems: 'center',
    },

    conteinerForm: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding:'5%',
    },

    logo: {
        height: 250,
        width: 250,
        borderRadius: 250 / 2,
        paddingStart: '5%',
        paddingEnd: '5%,'

    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,

    },

    

    button: {
        position: 'absolute',
        backgroundColor: '#CD788F',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },

})
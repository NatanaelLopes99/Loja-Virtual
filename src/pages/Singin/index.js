import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native'
import { login } from "../../api";

export default function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation();

    async function handleLogin() {
        const data = await login(email, password)

        if (data.id) {

            navigation.navigate('HomePage')
        }
        else{
            alert("Digite os credenciais corretos")
        }
    }

    return (
        <View style={styles.container}>
            <Animatable.View
                animation='fadeInLeft'
                delay={500}
                style={styles.containerHeader}
            >

                <Text style={styles.message}>Login</Text>

            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>

                <Text style={styles.title}>E-mail</Text>
                <TextInput
                    placeholder="Digite seu E-mail"
                    style={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder="Digite sua Senha"
                    style={styles.input}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Pressable
                    style={styles.button}
                    onPress={handleLogin}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>

                <Pressable
                    style={styles.buttonRegister}
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text style={styles.registerText}>Criar Conta</Text>

                </Pressable>

            </Animatable.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CD788F',
    },

    containerHeader: {
        margintop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },
    message: {
        marginTop: '10%',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },

    title: {
        fontSize: 20,
        marginTop: 28,

    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#A1A1A1',
        height: 40,
        marginBottom: 12,
        fontSize: 16,

    },

    button: {
        backgroundColor: '#CD788F',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        margintop: 14,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
    },

    buttonText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 'bold',
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },

    registerText: {
        color: '#A1A1A1',
    }
}

)
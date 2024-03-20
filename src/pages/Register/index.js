
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, onPress } from "react-native";
import * as Animatable from 'react-native-animatable'
import { TextInputMask } from 'react-native-masked-text'
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { register } from "../../api";
import { useNavigation } from '@react-navigation/native'

const schema = yup.object({
    username: yup.string().required("Informe seu nome"),
    email: yup.string().required("Informe seu E-mail").email("Digite um E-mail Válido"),
    password: yup.string().required("Informe sua Senha ").min(6, "Digite sua senha, no mínimo 6 caracteres"),
})

export default function Register() {
    const navigation = useNavigation();
    const [showPassword, setShowPassword] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    function handleRegister(data) {
        console.log(data);
        handleRegisterUser()

    }

    async function handleRegisterUser() {
        if (name === "" || email === "" || password === "") {
            return;
        }

        const data = await register(name, email, password);

        if (data.status === 400) {
            alert("Email já cadastrado")
            return;
        }

        alert("Cadastrado com sucesso!");
        navigation.navigate('SingIn')

    }


    return (
        <View style={styles.container}>
            <Animatable.View
                animation='fadeInLeft'
                style={styles.containerHeader}
            >
                <Text style={styles.message}>Register</Text>
            </Animatable.View>

            <Animatable.View
                animation='fadeInUp'
                delay={500}
                style={styles.containerForm}>

                <Text style={styles.title}>Peencha Todos os Dados para finalizar o cadastro</Text>
                <ScrollView style={styles.form}>
                    <Controller
                        control={control}
                        name="username"
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                style={[
                                    styles.input, {
                                        borderWidth: errors.username && 1,
                                        borderColor: errors.username && '#FF375B',
                                    }]}

                                onChangeText={(e) => {
                                    onChange(e)
                                    setName(e)
                                }}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Nome Completo"
                    />
                        )}
                    />
                    {errors.username && <Text style={styles.error} > {errors.username?.message}</Text>}
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                style={[
                                    styles.input, {
                                        borderWidth: errors.email && 1,
                                        borderColor: errors.email && '#FF375B',
                                    }]}

                                    onChangeText={(e) => {
                                        onChange(e)
                                        setEmail(e)
                                    }}
                                onBlur={onBlur}
                                value={value}
                                placeholder="E-mail"
                            />
                        )}
                    />
                    {errors.email && <Text style={styles.error} > {errors.email?.message}</Text>}

                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                style={[
                                    styles.input, {
                                        borderWidth: errors.password && 1,
                                        borderColor: errors.password && '#FF375B',
                                    }]}

                                    onChangeText={(e) => {
                                        onChange(e)
                                        setPassword(e)
                                    }}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Senha"
                            />
                        )}
                    />
                    {errors.password && <Text style={styles.error} > {errors.password?.message}</Text>}

                    <Controller
                        control={control}
                        name="confirmpass"
                        render={({ field: { onChange, onBlur, value } }) => (

                            <TextInput
                                style={[
                                    styles.input, {
                                        borderWidth: errors.confirmpass && 1,
                                        borderColor: errors.confirmpass && '#FF375B',
                                    }]}

                                onChangeText={onChange}
                                onBlur={onBlur}
                                value={value}
                                placeholder="Senha"
                            />
                        )}
                    />
                    {errors.confirmpass && <Text style={styles.error} > {errors.confirmpass?.message}</Text>}

                    <TouchableOpacity style={styles.button} onPress={handleSubmit(handleRegister)}>
                        <Text style={styles.buttonText}> Cadastrar</Text>
                    </TouchableOpacity>
                </ScrollView>
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
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
    },

    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF',
    },

    containerForm: {
        backgroundColor: '#FFF',
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '5%',
    },

    title: {
        fontSize: 20,
        marginTop: 28,
        color: '#A1A1A1',
    },

    input: {
        flex: 1,
        backgroundColor: '#F0F8FF',
        padding: '5%',
        borderRadius: 10,
        marginTop: '10%',
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
    },

    buttonRegister: {
        marginTop: 14,
        alignSelf: 'center',
    },

    registerText: {
        color: '#A1A1A1',
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,

    },

    error: {
        alignSelf: 'flex-start',
        color: '#FF375B',
        margin: 4,
    }
}

)
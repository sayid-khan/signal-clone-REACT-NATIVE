import { View, Text , StyleSheet, KeyboardAvoidingView } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Button,Input,Image} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'



const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //to check if the user is regiatered 
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
             if(authUser) {
                 navigation.replace("Home");
             }
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password).catch(error => alert(error.message))
    }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <StatusBar style='light'/>

            <Image
            source={{uri:"https://images.hindustantimes.com/tech/img/2021/05/12/960x540/signal_app_1610868805441_1610868819838_1620837476101.png"}}
            style={{width:200, height:190, borderRadius:10,marginBottom:15}}
            />
        <View style={styles.inputContainer}>
            <Input
            placeholder='Email'
            autoFocus={true}
            type='email'
            value={email}
            onChangeText={(text)=>setEmail(text)}
            />
            <Input
            placeholder='Password'
            type='password'
            secureTextEntry={true}
            value={password}
            onChangeText={(text)=>setPassword(text)}
            onSubmitEditing={signIn}
            />
        </View>

        <Button 
        style={styles.button}
        title='Login'
        onPress={signIn}
        />

        <Button 
        style={styles.button}
        type='outline'  //for white background
        title='Register' 
        onPress={()=>navigation.navigate('Register')}
        />

        <View style={{height:100}}/>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        backgroundColor:"white"
    },
    inputContainer:{
        width:300
    },
    button:{
        width:200,
        marginTop:10,
    },
});

export default LoginScreen
import React from "react";
import { SafeAreaView, Text, View, Image } from "react-native";
import { Alert } from "react-native";
import { Formik } from 'formik';
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import Input from "../../components/Input";
import styles from './Login.style';
import usePost from "../../hooks/UsePost/UsePost";
import { API_AUTH_URL } from "@env"

const Login = ({navigation}) => {
    const {data,loading,error,post} = usePost();
    const dispatch =useDispatch();

    const handleLogin = (values) => {
        post(API_AUTH_URL + '/login',values);
    };

    if(error){
        Alert.alert('Dükkan','Bir hata oluştu!')
    }
    if(data) {
        if(data.status === 'Error'){
            Alert.alert('Dükkan','Kullanıcı Bulunamadı!');
        }
        else{
            dispatch({type:'SET_USER',payload:{user}});
            navigation.navigate('ProductsPage');
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo_container}>
                <Image style={styles.logo} source={require('../../assets/login-logo.png')} />
            </View>
            <Formik
                initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
                {({ handleSubmit, handleChange, values }) => (
                    <View style={styles.body_container}>
                        <Input
                            placeholder="Kullanıcı Adını Giriniz..."
                            value={values.username}
                            onType={handleChange('username')} 
                            iconName="user"
                            />

                        <Input
                            placeholder="Şifrenizi Giriniz..."
                            value={values.password}
                            onType={handleChange('password')}
                            iconName="key"
                            isSecure
                            />
                        <Button text="Giriş Yap" onPress={handleSubmit} loading={loading} />
                    </View>
                )}
            </Formik>
        </SafeAreaView>
    )

}
export default Login;

const user = {
    "address": {
      "geolocation": {
        "lat": "-37.3159",
        "long": "81.1496"
      },
      "city": "kilcoole",
      "street": "new road",
      "number": 7682,
      "zipcode": "12926-3874"
    },
    "id": 1,
    "email": "john@gmail.com",
    "username": "johnd",
    "password": "m38rmF$",
    "name": {
      "firstname": "john",
      "lastname": "doe"
    },
    "phone": "1-570-236-7033",
    "__v": 0
  };
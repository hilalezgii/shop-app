import React from "react";
import LottieView from "lottie-react-native";
const Error = () => {
    return <LottieView
        style={{ width: "100%", height: "100%" }}
        source={require('../../assets/error.json')}
        autoPlay
    />;
}

export default Error;
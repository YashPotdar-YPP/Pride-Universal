import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
  } from "react-native";
  import { useRef, useState } from "react";
  import firebase from "firebase/compat/app";
  import "firebase/compat/auth";
  
  export default function Login({ navigation }) {
    const [code, setCode] = useState(""); // State for otp entered by user
    const [number, setNumber] = useState(); // State for phone number input
    const [verificationId, setVerificationId] = useState(null);
    // const Recaptcha = useRef(null);
  
    // const sendOtpMessage = async () => {
    //   try {
    //     const phoneprovider =
    //       new firebase.auth.PhoneAuthProvider().verifyPhoneNumber(
    //         number
    //         // Recaptcha.current
    //       );
    //     setVerificationId(phoneprovider);
    //   } catch (error) {
    //     Alert.alert("Error", error.message);
    //     console.log(number);
    //   }
    // };
  
    // const confirmOtp = async () => {
    //   try {
    //     if (!verificationId || !code) {
    //       Alert.alert("Error", "Verification ID or code is missing.");
    //       return;
    //     }
    //     const credential = firebase.auth.PhoneAuthProvider.credential(
    //       verificationId,
    //       code
    //     );
    //     await firebase
    //       .auth()
    //       .signInWithCredential(credential)
    //       .then(() => {
    //         setCode("");
    //         setNumber("");
    //         navigation.navigate("Dashboard");
    //       });
    //   } catch (error) {
    //     Alert.alert("Something went wrong", error.message);
    //   }
    // };
  
    return (
      <View style={styles.mainContainer}>
        <View style={{ marginTop: 50 }}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.loginImg}
              source={require("../assets/LoginImg.png")}
            />
          </View>
          <View style={styles.firstContainer}>
            <Text style={styles.heading}>Let,s get you started</Text>
            <View>
              <TextInput
                value={number}
                onChangeText={(num) => {
                  setNumber(num);
                }}
                placeholder="Enter Phone Number With country code"
                style={styles.input}
                keyboardType="phone-pad"
                maxLength={14}
              />
              <Text style={{ color: "gray" }}>
                Otp will be sent on your number
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={styles.logInBtn}
                onPress={() => {
                  navigation.navigate("otpPage");
                }}
              >
                <Text style={styles.Login}>Get OTP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
  
  // Style
  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: "white",
      flex: 1,
      alignItems: "flex-start",
    },
    firstContainer: {
      marginLeft: 30,
    },
    heading: {
      alignItems: "flex-start",
      color: "#30188e",
      fontWeight: "bold",
      fontSize: 32,
    },
    headingPara: {
      fontWeight: "bold",
      fontSize: 17,
      color: "#999999",
    },
    input: {
      height: 40,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#dddddd",
      padding: 10,
      width: 280,
    },
    forgetLine: {
      marginTop: 18,
      color: "#30188e",
    },
    logInBtn: {
      alignItems: "center",
      backgroundColor: "#30188e",
      height: 40,
      width: 280,
      marginTop: 20,
      borderRadius: 10,
      justifyContent: "center",
    },
    Login: {
      color: "#ffffff",
      textAlign: "center",
    },
    loginImg: {
      width: 350,
      height: 300,
      marginLeft: "auto",
    },
    verificationBtn: {
      height: 40,
      marginTop: 10,
      borderRadius: 10,
      padding: 10,
      width: 100,
      backgroundColor: "#30188e",
    },
  });
  
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
  } from "react-native";
  import { useRef, useState } from "react";
  
  export default function Login({ navigation }) {
    const firstInput = useRef();
    const secondInput = useRef();
    const thirdInput = useRef();
    const fourthInput = useRef();
    const fifthInput = useRef();
    const sixthInput = useRef();
    const [otp, setotp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "", 6: "" });
    return (
      <View style={styles.mainComponent}>
        <View>
          <Image
            style={styles.loginImg}
            source={require("../assets/LoginImg.png")}
          />
        </View>
  
        <View style={styles.secondComponent}>
          <Text style={styles.heading}>Enter OTP</Text>
          <Text style={{ color: "gray" }}>
            An 4 digit code has been sent to your number
          </Text>
  
          <View style={styles.inputContainer}>
            <TextInput
              ref={firstInput}
              onChangeText={(text) => {
                text && secondInput.current.focus();
                setotp({ ...otp, 1: text });
              }}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              onChangeText={(text) => {
                text ? thirdInput.current.focus() : firstInput.current.focus;
                setotp({ ...otp, 2: text });
              }}
              ref={secondInput}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              onChangeText={(text) => {
                text ? fourthInput.current.focus() : secondInput.current.focus();
                setotp({ ...otp, 3: text });
              }}
              ref={thirdInput}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              onChangeText={(text) => {
                text ? fifthInput.current.focus() : thirdInput.current.focus();
                setotp({ ...otp, 4: text });
              }}
              ref={fourthInput}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              onChangeText={(text) => {
                text ? sixthInput.current.focus() : fourthInput.current.focus();
                setotp({ ...otp, 5: text });
              }}
              ref={fifthInput}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
            <TextInput
              onChangeText={(text) => {
                !text && secondInput.current.focus();
                setotp({ ...otp, 6: text });
              }}
              ref={sixthInput}
              style={styles.input}
              keyboardType="phone-pad"
              maxLength={1}
            />
          </View>
          <Text style={{ color: "gray", marginTop: 10 }}>
            Didn't receive the OTP ?{" "}
            <Text style={{ color: "#30188e" }}>Resend OTP</Text>
          </Text>
          <TouchableOpacity
            style={styles.logInBtn}
            onPress={() => {
              navigation.navigate("Dashboard");
            }}
          >
            <Text style={{ color: "white" }}>Verify</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  // Style
  const styles = StyleSheet.create({
    mainComponent: {
      flex: 1,
      backgroundColor: "white",
    },
    loginImg: {
      width: 350,
      height: 300,
      marginTop: 30,
    },
    secondComponent: {
      alignItems: "flex-start",
      marginLeft: 30,
    },
    heading: {
      color: "#30188e",
      fontWeight: "bold",
      fontSize: 28,
    },
    inputContainer: {
      display: "flex",
      flexDirection: "row",
    },
    input: {
      height: 40,
      marginTop: 20,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#f2f2f2",
      padding: 10,
      width: 40,
      backgroundColor: "#f2f2f2",
      marginLeft: 5,
    },
    verifyBtn: {
      backgroundColor: "#30188e",
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
  });
  
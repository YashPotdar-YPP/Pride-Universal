import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
  
  } from "react-native";
  import Icon from "react-native-vector-icons/FontAwesome5";
  
  export default function Dashboard({ navigation }) {
    return (
      <View style={styles.body}>
        <TouchableOpacity
          style={styles.ToResidents}
          onPress={() => {
            navigation.navigate("Residents");
          }}
        >
          <Text>
            <Icon.Button
              name="users"
              backgroundColor="#ffffff"
              color="#004aad"
              size={30}
            ></Icon.Button>
          </Text>
          <Text>Residents</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  // Style
  const styles = StyleSheet.create({
    body: { backgroundColor: "white", flex: 1 },
    ToResidents: {
      // borderColor:"#dedfdf",
      borderWidth: 1,
      borderColor: "#dedfdf",
      width: 140,
      padding: 10,
      marginTop: 20,
      marginLeft: 20,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  
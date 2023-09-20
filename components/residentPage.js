import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Alert,
  Modal,
  Pressable,
  TouchableOpacity,
  Image,
} from "react-native";
import { db } from "../firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { List } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ResidentsList({ navigation }) {
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [residentData, setResidentData] = useState({ A: {}, B: {} });
  const [visibleWing, setVisibleWing] = useState("A");
  const [ActiveA, setActiveA] = useState(true);
  const [ActiveB, setActiveB] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [Flat, setFlat] = useState([]);

  const GetResidents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Residents"));
      const residentDataObject = {
        A: {},
        B: {},
      };

      querySnapshot.forEach((doc) => {
        doc.data().wings.forEach((wing, index) => {
          const wingName = index === 0 ? "A" : "B";
          const floorsData = {};
          wing.floors.forEach((floor) => {
            floorsData[floor.floor] = floor.flats;
          });
          residentDataObject[wingName] = floorsData;
        });
      });
      setResidentData(residentDataObject);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    GetResidents();
  }, []);

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View>
          <View style={styles.WingBtn}>
            <TouchableOpacity
              onPress={() => {
                setVisibleWing("A");
                setActiveA(true);
                setActiveB(false);
              }}
              style={ActiveA === true ? styles.activeBtn : styles.Wing}
            >
              <Text
                style={
                  ActiveA === true
                    ? { color: "white", textAlign: "center" }
                    : { color: "black", textAlign: "center" }
                }
              >
                {visibleWing === "A" ? "Wing A" : "Wing A"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setVisibleWing("B");
                setActiveB(true);
                setActiveA(false);
              }}
              style={ActiveB === true ? styles.activeBtn : styles.Wing}
            >
              <Text
                style={
                  ActiveB === true
                    ? { color: "white", textAlign: "center" }
                    : { color: "black", textAlign: "center" }
                }
              >
                {visibleWing === "B" ? "Wing B" : "Wing B"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ display: visibleWing === "A" ? "block" : "none" }}>
          {Object.entries(residentData.A).map(([floor, flats]) => (
            <List.Section>
              <List.Accordion
                title={`floor ${floor}`}
                style={styles.accordionHeading}
              >
                {flats.map((flat) => (
                  <View style={{ padding: 0 }}>
                    <List.Item
                      key={flat.flatNumber}
                      style={styles.accordionData}
                      // If the name and last name is null
                      {...(flat.owner_fname && flat.owner_lname
                        ? null
                        : ((flat.owner_fname = "-"), (flat.owner_lname = "-")))}
                      // accordion text
                      title={`${flat.wing} ${"  "} ${flat.flatNumber} ${"  "} ${
                        flat.owner_fname
                      } ${flat.owner_lname} `}
                      right={() => (
                        <Icon.Button
                          name={flat.owner_fname == "-" ? "eye-slash" : "eye"}
                          backgroundColor="#ffffff"
                          color="black"
                          style={{ padding: 0, margin: 0 }}
                          onPress={() => {
                            if (flat.owner_fname != "-") {
                              setModalVisible(true);
                              setFlat(flat);
                            }
                          }}
                        >
                          <Icon.Button
                            name={
                              flat.owner_contact_number == null
                                ? "phone-slash"
                                : "phone-alt"
                            }
                            backgroundColor="#ffffff"
                            color="black"
                            style={{ padding: 0 }}
                          >
                            <Icon.Button
                              name="whatsapp"
                              backgroundColor="#ffffff"
                              color="black"
                              style={{ padding: 0 }}
                            ></Icon.Button>
                          </Icon.Button>
                        </Icon.Button>
                      )}
                    />
                  </View>
                ))}
              </List.Accordion>
            </List.Section>
          ))}
        </View>

        <View style={{ display: visibleWing === "B" ? "block" : "none" }}>
          {Object.entries(residentData.B).map(([floor, flats]) => (
            <List.Section>
              <List.Accordion
                title={`floor ${floor}`}
                style={styles.accordionHeading}
              >
                {flats.map((flat) => (
                  <View style={{ padding: 0 }}>
                    <List.Item
                      style={styles.accordionData}
                      // If the name and last name is null
                      {...(flat.owner_fname && flat.owner_lname
                        ? null
                        : ((flat.owner_fname = "-"), (flat.owner_lname = "-")))}
                      // accordion text
                      title={`${flat.wing} ${"  "} ${flat.flatNumber} ${"  "} ${
                        flat.owner_fname
                      } ${flat.owner_lname} `}
                      right={() => (
                        <Icon.Button
                          name={flat.owner_fname == "-" ? "eye-slash" : "eye"}
                          backgroundColor="#ffffff"
                          color="black"
                          style={{ padding: 0 }}
                          onPress={() => {
                            if (flat.owner_fname != "-") {
                              setModalVisible(true);
                              setFlat(flat);
                            }
                          }}
                        >
                          <Icon.Button
                            name={
                              flat.owner_contact_number == null
                                ? "phone-slash"
                                : "phone-alt"
                            }
                            backgroundColor="#ffffff"
                            color="black"
                            style={{ padding: 0 }}
                          >
                            <Icon.Button
                              name="whatsapp"
                              backgroundColor="#ffffff"
                              color="black"
                              style={{ padding: 0 }}
                            ></Icon.Button>
                          </Icon.Button>
                        </Icon.Button>
                      )}
                    />
                  </View>
                ))}
              </List.Accordion>
            </List.Section>
          ))}
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <View style={styles.modalImgBox}>
                    <Image
                      style={styles.modalImg}
                      source={require("../assets/user.png")}
                    />
                  </View>
                  <Text style={[styles.modalText, { marginTop: 15 }]}>
                    {Flat.owner_fname} {Flat.owner_lname}
                  </Text>
                  <Text style={styles.modalText}>
                    <Icon.Button
                      name="phone-alt"
                      backgroundColor="#ffffff"
                      color="#38b6ff"
                      style={{ padding: 0 }}
                    ></Icon.Button>
                    {Flat.owner_contact_number}
                  </Text>
                  <Text style={styles.modalText}>
                    <Icon.Button
                      name="envelope"
                      backgroundColor="#ffffff"
                      color="#38b6ff"
                      style={{ padding: 0 }}
                    ></Icon.Button>
                    {Flat.owner_email}
                  </Text>
                  <Text style={styles.modalText}>
                    <Icon.Button
                      name="house-user"
                      backgroundColor="#ffffff"
                      color="#38b6ff"
                      style={{ padding: 0 }}
                    ></Icon.Button>
                    Wing {Flat.wing} - {Flat.flatNumber}
                  </Text>
                </View>
                <Pressable
                  style={styles.Hidebutton}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </ScrollView>
  );
}

// Style
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  accordionHeading: {
    marginLeft: 30,
  },
  accordionData: {
    marginLeft: 15,
  },
  DisplayOpt: {
    textDecorationLine: "line-through",
  },
  WingBtn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  Wing: {
    borderWidth: 1,
    width: 80,
    padding: 10,
    borderColor: "#004aad",
    borderRadius: 10,
    marginRight: 5,
  },
  activeBtn: {
    backgroundColor: "#004aad",
    borderWidth: 1,
    width: 80,
    padding: 10,
    borderColor: "black",
    borderRadius: 10,
    marginRight: 5,
  },

  // For Model
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    alignItems: "center",
    width: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    elevation: 15,
  },
  Hidebutton: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: "gray",
    marginBottom: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  modalText: {
    marginBottom: 25,
    textAlign: "center",
    fontSize: 17,
    borderBottomWidth: 1,
    borderBottomColor: "#38b6ff",
  },
  modalImgBox: {
    height: 200,
    backgroundColor: "#38b6ff",
    width: 300,
  },
  modalImg: { marginLeft: "auto", marginRight: "auto", marginTop: 40 },
});

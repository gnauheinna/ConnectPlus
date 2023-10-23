import * as React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";


export default function interestScreen() {
  return (
    <LinearGradient style={styles.container} locations={[0, 1]} colors={["#fff9e9", "#fff"]}>
      <View style={styles.mainContainer}>
          <Text style={[styles.title]}>Last Step!</Text>
          <Text style={[styles.subTitle]}>Lorem ipsum dolor sit amet consectetur. Quisque mi metus aliquam sed neque.</Text>
          <View style={styles.interestBoxContainer}>
              <View style={styles.interestBox}>
                  {/* <TouchableOpacity style={styles.checkbox}>
                      <Image source={require("../assets/images/checkbox.png")} />
                  </TouchableOpacity> */}
                  <Text style={styles.interestText}>Academics</Text>
              </View>
              <View style={styles.interestBox}>
                  <Text style={styles.interestText}>Career</Text>
                  {/* <TouchableOpacity style={styles.checkbox}>
                      <Image source={require("../assets/images/checkbox.png")} />
                  </TouchableOpacity> */}
              </View>
              <View style={styles.interestBox}>
                  <Text style={styles.interestText}>Financial</Text>
              </View>
              <View style={styles.interestBox}>
                  <Text style={styles.interestText}>Student Life</Text>
              </View>
          </View>
          <TouchableOpacity style={styles.doneButton}>
              <Text style={styles.doneButtonText}>Done</Text>
          </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 40,
    marginTop: 50,
  },
  inputContainer:{
    flexDirection: "row",
  },
  title:{
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#453B4F",
  },
  subTitle:{
    fontSize: 16,
    marginBottom: 50,
    color: "#453B4F",
  },
  interestBoxContainer:{
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  interestBox:{
    backgroundColor: "#FFC940",
    width: 145,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
  },
  interestText:{
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  checkbox:{
    borderRadius: 30,
  },
  doneButton: {
    backgroundColor: "#FFC940",
    marginTop: 40,
    marginBottom: 40,
    width: 240,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: 'center',
  },
  doneButtonText:{
    fontSize: 18,
    alignSelf: 'center',
  }
});
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useUser } from "./context/UserContext";
import { getFirestore, collection, doc, updateDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
export default function interestScreen() {
  const [AIsChecked, setAIsChecked] = React.useState(false);
  const [CIsChecked, setCIsChecked] = React.useState(false);
  const [FIsChecked, setFIsChecked] = React.useState(false);
  const [SIsChecked, setSIsChecked] = React.useState(false);

  const router = useRouter();
  const db = getFirestore();
  const auth = getAuth();
  const user = auth.currentUser;
  const userId = user?.uid;

  function nextPage() {
    if (userId) {
      const userdata = doc(db, "users", userId);
      if (AIsChecked) {
        updateDoc(userdata, { academic: true });
      }
      if (FIsChecked) {
        updateDoc(userdata, { financial: true });
      }
      if (CIsChecked) {
        updateDoc(userdata, { career: true });
      }
      if (SIsChecked) {
        updateDoc(userdata, { studentLife: true });
      }
    }

    router.push("/profile");
  }

  function AcademicChosen() {
    setAIsChecked(!AIsChecked);
  }
  useEffect(() => {
    console.log("Academic: ", AIsChecked);
  }, [AIsChecked]);

  function FinancialChosen() {
    setFIsChecked(!FIsChecked);
  }
  useEffect(() => {
    console.log("Financial: ", FIsChecked);
  }, [FIsChecked]);

  function CareerChosen() {
    setCIsChecked(!CIsChecked);
  }
  useEffect(() => {
    console.log("Career: ", CIsChecked);
  }, [CIsChecked]);

  function StuLifeChosen() {
    setSIsChecked(!SIsChecked);
  }
  useEffect(() => {
    console.log("Student Life: ", SIsChecked);
  }, [SIsChecked]);

  function directToAddAvatar() {
    router.push("/addavatar");
  }

  return (
<View style={styles.outterMostContainer}>

  {/* Back Button */}
  <View style={styles.backBtnContainer}>
            <TouchableOpacity style={styles.backBtn} onPress={directToAddAvatar}>
              <Image style={styles.backBtnImg} source={require("../assets/images/icons/blackBack.png")}/>
            </TouchableOpacity>
  </View>

      <View style={styles.mainContainer}>
        <Text style={[styles.title]}>Last Steps</Text>
        <Text style={[styles.subTitle]}>Tell us more about you! What are your interests? Please select at least one.</Text>
        <View style={styles.interestBoxContainer}>

          {/* Academic Button */}
          {AIsChecked ? (
          // Render this when AIsChecked is true
          <TouchableOpacity style={styles.interestBoxSelected} onPress={AcademicChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/academic.png")} />
            <Text style={styles.interestText}>Academics</Text>
          </TouchableOpacity>
        ) : (
          // Render this when AIsChecked is false
          <TouchableOpacity style={styles.interestBox} onPress={AcademicChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/academic.png")} />
            <Text style={styles.interestText}>Academics</Text>
          </TouchableOpacity>)}

          {/* Career Button */}
          {CIsChecked ? (
          // Render this when CIsChecked is true
          <TouchableOpacity style={styles.interestBoxSelected} onPress={CareerChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/career.png")} />
            <Text style={styles.interestText}>Career</Text>
          </TouchableOpacity>
        ) : (
          // Render this when CIsChecked is false
          <TouchableOpacity style={styles.interestBox} onPress={CareerChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/career.png")} />
            <Text style={styles.interestText}>Career</Text>
          </TouchableOpacity>)}

          {/* Financial Button */}
          {FIsChecked ? (
          // Render this when FIsChecked is true
          <TouchableOpacity style={styles.interestBoxSelected} onPress={FinancialChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/financial.png")} />
            <Text style={styles.interestText}>Financial</Text>
          </TouchableOpacity>
        ) : (
          // Render this when FIsChecked is false
          <TouchableOpacity style={styles.interestBox} onPress={FinancialChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/financial.png")} />
            <Text style={styles.interestText}>Financial</Text>
          </TouchableOpacity>)}

          {/* Student Life Button */}
          {SIsChecked ? (
          // Render this when SIsChecked is true
          <TouchableOpacity style={styles.interestBoxSelected} onPress={StuLifeChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/stulife.png")} />
            <Text style={styles.interestText}>Student Life</Text>
          </TouchableOpacity>
        ) : (
          // Render this when SIsChecked is false
          <TouchableOpacity style={styles.interestBox} onPress={StuLifeChosen}>
            <Image style={styles.interestIcons} source={require("../assets/images/interestIcons/stulife.png")} />
            <Text style={styles.interestText}>Student Life</Text>
          </TouchableOpacity>)}
        </View>

        {/* Done Button */}
        {!AIsChecked && !FIsChecked && !SIsChecked && !CIsChecked ? (
          // Render this when none of the interests is selected
          <TouchableOpacity style={styles.doneButtonDisabled} onPress={nextPage}>
          <Text style={styles.doneButtonTextDisabled}>Done</Text>
        </TouchableOpacity>
        ) : (
        <TouchableOpacity style={styles.doneButton} onPress={nextPage}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>)}

      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  outterMostContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 20,
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
  },
  backBtnContainer: {
    top: 20, 
    left: 20,
    alignSelf: "flex-start",
    justifyContent: 'center',
    marginBottom: 40,
  },
  backBtn: {
    padding: 5,
    resizeMode: "contain",
    justifyContent: 'center',
  },
  backBtnImg: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#453B4F",
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 50,
    color: "#453B4F",
  },
  interestBoxContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  interestBoxSelected: {
    width: 165,
    height: 140,
    marginBottom: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#FFC940",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFEAB6",
  },
  interestBox: {
    width: 165,
    height: 140,
    marginBottom: 20,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#453B4F",
    alignItems: 'center',
    justifyContent: 'center',
  },
  interestIcons:{
    width: 70,
    height: 70,
    marginBottom: 10,
    resizeMode: "contain",
  },
  interestText: {
    color: "#453B4F",
    fontSize: 16,
    fontWeight: "400",
    justifyContent: "center",
    alignItems: "center",
  },
  checkbox: {
    borderRadius: 30,
  },
  doneButtonDisabled:{
    backgroundColor: "#DADADA",
    marginTop: 40,
    marginBottom: 40,
    width: 240,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  doneButtonTextDisabled:{
    color: "#9B9B9B",
    fontSize: 18,
    alignSelf: "center",
  },
  doneButton: {
    backgroundColor: "#FFC940",
    marginTop: 40,
    marginBottom: 40,
    width: 240,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignSelf: "center",
  },
  doneButtonText: {
    fontSize: 18,
    alignSelf: "center",
  },
});
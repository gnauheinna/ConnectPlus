import * as React from "react";
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

  function AcademicChoosen() {
    setAIsChecked(!AIsChecked);
  }

  function FinancialChoosen() {
    setFIsChecked(!FIsChecked);
  }

  function CareerChoosen() {
    setCIsChecked(!CIsChecked);
  }

  function StuLifeChoosen() {
    setSIsChecked(!SIsChecked);
  }

  return (
    <LinearGradient
      style={styles.container}
      locations={[0, 1]}
      colors={["#fff9e9", "#fff"]}
    >
      <View style={styles.mainContainer}>
        <Text style={[styles.title]}>Last Step!</Text>
        <Text style={[styles.subTitle]}>
          Tell us more about you! What are your interest? (please select at
          least one!)
        </Text>
        {/* Academic Button */}
        <View style={styles.interestBoxContainer}>
          <TouchableOpacity
            style={styles.interestBox}
            onPress={AcademicChoosen}
          >
            <TouchableOpacity style={styles.checkbox}>
              <Image source={require("../assets/images/checkbox.png")} />
            </TouchableOpacity>
            <Text style={styles.interestText}>Academics</Text>
          </TouchableOpacity>
          {/* Career Button */}
          <TouchableOpacity style={styles.interestBox} onPress={CareerChoosen}>
            <Text style={styles.interestText}>Career</Text>
            <TouchableOpacity style={styles.checkbox} onPress={CareerChoosen}>
              <Image source={require("../assets/images/checkbox.png")} />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* Financial Button */}
          <TouchableOpacity
            style={styles.interestBox}
            onPress={FinancialChoosen}
          >
            <Text style={styles.interestText}>Financial</Text>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={FinancialChoosen}
            >
              <Image source={require("../assets/images/checkbox.png")} />
            </TouchableOpacity>
          </TouchableOpacity>
          {/* Student Life Button */}
          <TouchableOpacity style={styles.interestBox} onPress={StuLifeChoosen}>
            <Text style={styles.interestText}>Student Life</Text>
            <TouchableOpacity style={styles.checkbox} onPress={StuLifeChoosen}>
              <Image source={require("../assets/images/checkbox.png")} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
        {/* Done Button */}
        <TouchableOpacity style={styles.doneButton} onPress={nextPage}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 40,
    marginTop: 50,
  },
  inputContainer: {
    flexDirection: "row",
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
  interestBox: {
    backgroundColor: "#FFC940",
    width: 145,
    height: 120,
    marginBottom: 20,
    borderRadius: 10,
  },
  interestText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    position: "absolute",
    bottom: 10,
    left: 10,
  },
  checkbox: {
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
    alignSelf: "center",
  },
  doneButtonText: {
    fontSize: 18,
    alignSelf: "center",
  },
});

import { StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import { DarkTheme } from "@react-navigation/native";
import { black } from "react-native-paper/lib/typescript/styles/themes/v2/colors";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Avatar.Image
        size={64}
        source={require("../../assets/images/smile.png")}
      />
      <Text
        style={[
          styles.subtitle,
          { color: "grey", fontWeight: "bold", fontSize: 12 },
        ]}
      >
        Name
      </Text>
      <Text
        style={[
          styles.text,
          { color: "grey", fontWeight: "bold", fontSize: 12 },
        ]}
      >
        Happie
      </Text>
      <View style={styles.textBoxContainer}>
        <Text
          style={[
            styles.subtitle,
            { color: "grey", fontWeight: "bold", fontSize: 12 },
          ]}
        >
          Intro
        </Text>
        <Text style={[styles.text, { color: "grey", fontSize: 12 }]}>
          First-gen Freshmen studying economics!
        </Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  text: {
    fontSize: 14,
    marginTop: 5,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textBoxContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});

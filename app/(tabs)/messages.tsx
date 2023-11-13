import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily } from "../GlobalStyles";

export default function Message() {
  return (
    <View style={styles.outterContainer}>
      <ImageBackground
        style={styles.topContainer}
        source={require("../../assets/images/background.png")}
      >
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.chatBigTitle}>Chat</Text>
          {/* edit button */}
          <TouchableOpacity style={styles.editButton}>
            <Image
              style={styles.editIcon}
              contentFit="cover"
              source={require("../../assets/images/edit.png")}
            />
          </TouchableOpacity>
        </View>
        {/* Search Bar */}
        <View style={[styles.searchBar, styles.searchBarLayout]}>
          <Image
            style={[styles.searchIcon, styles.IconLayout]}
            contentFit="cover"
            source={require("../../assets/images/search.png")}
          />
          <Text style={styles.search}>Search</Text>
        </View>
      </ImageBackground>

      {/* Scrollable Container */}
      <ScrollView style={styles.messagesContainer}>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>Annie Huang</Text>
            <Text style={styles.latestPosition}>We love Connect Plus!🩷 </Text>
            <Text style={[styles.text4, styles.textTypo]}>11/05</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>Rachel Li</Text>
            <Text style={styles.latestPosition}>
              Let me know if there's any thing I can help you with!
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>10/02</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>Kristi Li</Text>
            <Text style={styles.latestPosition}>
              Lovely connecting with you!
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>10/30</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>
              Gaby Garcia-Mendoza
            </Text>
            <Text style={styles.latestPosition}>
              Thank you for letting me know!
            </Text>
            <Text style={[styles.text4, styles.textTypo]}>10/26</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>Asad</Text>
            <Text style={styles.latestPosition}>What a great app!</Text>
            <Text style={[styles.text4, styles.textTypo]}>10/02</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.individualMessageContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.profilePhoto}
              contentFit="cover"
              source={require("../../assets/images/profileImg.png")}
            />
          </View>
          <View style={styles.messageTextContainer}>
            <Text style={[styles.name, styles.nameTypo]}>Rhett</Text>
            <Text style={styles.latestPosition}>Hi!!</Text>
            <Text style={[styles.text4, styles.textTypo]}>10/02</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },
  topContainer: {
    height: "80%",
    justifyContent: "space-between",
    padding: 40,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#453B4F",
  },
  groupItemPosition: {
    left: 0,
    top: 0,
  },
  searchBarLayout: {
    height: 39,
    width: 332,
    left: "50%",
    position: "absolute",
    borderRadius: 30,
    backgroundColor: "rgba(255, 255, 255, 0.5)",
  },
  IconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editButton: {
    marginLeft: 20,
    marginRight: 20,
  },
  nameTypo: {
    fontSize: FontSize.size_xl,
    left: 87,
    color: Color.colorBlack,
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  textTypo: {
    top: 3,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout1: {
    width: 319,
    left: 28,
  },
  latestPosition: {
    top: 34,
    left: 87,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.stolzl,
    position: "absolute",
    marginBottom: 20,
  },
  backgroundIcon: {
    width: 405,
    height: 309,
    position: "absolute",
  },
  chatBigTitle: {
    fontSize: 36,
    color: "#453B4F",
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  groupChild: {
    marginLeft: -166,
    borderRadius: 58,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    top: 0,
    width: 332,
    left: "50%",
  },
  searchIcon: {
    height: "40.58%",
    width: "4.77%",
    top: "30.99%",
    right: "88.58%",
    bottom: "28.43%",
    left: "6.65%",
  },
  search: {
    top: 11,
    left: 44,
    color: Color.colorGray_100,
    fontSize: FontSize.size_mini,
    textAlign: "left",
    fontFamily: FontFamily.stolzl,
    position: "absolute",
  },
  searchBar: {
    marginLeft: -165.5,
    top: 130,
  },
  editIcon: {
    height: 22,
    width: 22,
    top: "10.13%",
    right: "8.92%",
    bottom: "87.02%",
    left: "84.6%",
    resizeMode: "contain",
  },
  messagesContainer: {
    top: 188,
    width: "100%",
    borderRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
    height: "80%",
    position: "absolute",
    backgroundColor: Color.colorWhite,
    left: 0,
    right: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  profilePhoto: {
    width: 68,
    height: 68,
    left: 0,
    alignContent: "center",
  },
  imageContainer: {
    top: 10,
    bottom: 10,
    width: "5%",
  },
  messageTextContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "flex-start",
  },
  name: {
    color: Color.colorBlack,
    fontWeight: "bold",
    marginBottom: 20,
  },
  text4: {
    left: 278,
    color: Color.colorGray_100,
  },
  ellipseParent: {
    top: 647,
    width: 319,
    left: 28,
  },
  individualMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    top: 0,
    width: "100%",
    left: 28,
    height: 110,
  },
  barbraBrown: {
    color: Color.colorBlack,
    fontWeight: "500",
  },
  text6: {
    left: 290,
    color: Color.colorBlack,
    fontWeight: "500",
  },
  ellipseContainer: {
    top: 233,
    width: 320,
    left: 28,
    height: 68,
  },
  tues: {
    left: 282,
    color: Color.colorGray_100,
  },
  groupView: {
    top: 441,
    width: 319,
    left: 28,
  },
  latestMessageHere: {
    width: 173,
    marginBottom: 20,
  },
  text7: {
    left: 291,
    color: Color.colorGray_100,
  },
  ellipseParent1: {
    top: 336,
    height: 70,
    position: "absolute",
  },
  wed: {
    left: 284,
    color: Color.colorGray_100,
  },
});

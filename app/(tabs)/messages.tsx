import { Text, View } from "../../components/Themed";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image } from "expo-image";
import { StyleSheet, ScrollView, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontSize, Color, FontFamily } from "../GlobalStyles";
import { useRouter } from "expo-router";

export default function Message() {
  const router = useRouter();
  function directToChatBox() {
    router.push("/chatbox");
  }

  return (
    <View style={styles.outterContainer}>

      <View style={styles.container}>
          <ImageBackground source={require("../../assets/images/background.png")} resizeMode="cover" style={styles.gradientBackground}>
              <View style={styles.topContainer}>
                  {/* Includes the title 'Chat' and the write button */}
                  <View style={styles.titleContainer}>
                      <Text style={styles.chatBigTitle}>Chat</Text>
                      <TouchableOpacity>
                        <Image style={styles.startAChatButton} source={require("../../assets/images/edit.png")}/>
                      </TouchableOpacity>
                  </View>
                  {/* Search Bar */}
                  <TouchableOpacity>
                    <View style={styles.searchBar}>
                      <Image style={styles.searchIcon} source={require("../../assets/images/search.png")}/>
                      <Text style={styles.searchText}>Search</Text>
                    </View>
                  </TouchableOpacity>
               </View>
           </ImageBackground> 
     </View>

      {/* Scrollable Container */}
      <ScrollView style={styles.messagesContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.messagesMainContainer}>
        {/* 1st Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar1.png")} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Rachel Li</Text>
              <Text style={styles.lastMessage}>We love Connect Plus!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/14</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 2nd Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar2.png")} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Kristi Li</Text>
              <Text style={styles.lastMessage}>Lovely connecting with you!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/14</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 3rd Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar3.png")}/>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Asad</Text>
              <Text style={styles.lastMessage}>What a great app!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/12</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 4th Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar4.png")} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Gaby GM</Text>
              <Text style={styles.lastMessage}>Thank you for letting me know!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/10</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 5th Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar7.png")}/>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Annie Huang</Text>
              <Text style={styles.lastMessage}>Happy to help!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/9</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 6th Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar2.png")} />
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Kristi Li</Text>
              <Text style={styles.lastMessage}>Lovely connecting with you!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/8</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 7th Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
        <View style={styles.individualMessageMainContainer}>
            <View style={styles.profilePicContainer}>
              <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar3.png")}/>
            </View>
            <View style={styles.userInfoContainer}>
              <Text style={styles.userName}>Asad</Text>
              <Text style={styles.lastMessage}>What a great app!</Text>
            </View>
            <View style={styles.timestampContainer}>
              <Text style={styles.messageTimestamp}>11/8</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* 8th Message Box */}
        <TouchableOpacity style={styles.individualMessageContainer} onPress={directToChatBox}>
          <View style={styles.individualMessageMainContainer}>
              <View style={styles.profilePicContainer}>
                <Image style={styles.profilePhoto} source={require("../../assets/images/avatars/avatar4.png")} />
              </View>
              <View style={styles.userInfoContainer}>
                <Text style={styles.userName}>Gaby GM</Text>
                <Text style={styles.lastMessage}>Thank you for letting me know!</Text>
              </View>
              <View style={styles.timestampContainer}>
                <Text style={styles.messageTimestamp}>11/6</Text>
              </View>
            </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </View>

  );
}

const styles = StyleSheet.create({
  outterContainer: {
    flex: 1,
  },
  container: {
  },
  topContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: "transparent",
    paddingTop: 50,
  },
  gradientBackground: {
    width: 390, 
    height: 200,
    zIndex: 1,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    marginBottom: 10,
  },
  chatBigTitle: {
    fontSize: 36,
    color: "#453B4F",
    fontWeight: "bold",
    alignItems: "center",
  },
  startAChatButton: {
    height: 24,
    width: 24,
    resizeMode: "contain",
  },
  searchBar: {
    height: 45,
    width: "100%",
    borderRadius: 30,
    backgroundColor: "#FFFFFF",
    opacity: 0.8,
    padding: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyCenter: "center",
  },
  searchIcon: {
    width: 22,
    height: 22,
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  searchText: {
    color: "#777777",
    fontSize: 20,
    alignItems: "center",
  },
  messagesContainer: {
    zIndex: 2,  
    borderRadius: 30,
    marginTop: -30,
    backgroundColor: "transparent",
    shadowColor: "rgba(0, 0, 0, 0.02)",
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 22,
    elevation: 22,
    shadowOpacity: 1,
  },
  messagesMainContainer: {
    borderRadius: 30,
    backgroundColor: "white",
  },
  individualMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F1F1",
    borderRadius: 30,
  },
  individualMessageMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userInfoContainer:{
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    paddingBottom: 20,
    marginRight: 30,
    width: 200,
  },
  profilePicContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  profilePhoto: {
    width: 64,
    height: 64,
    marginRight: 20,
    alignContent: "center",
  },
  userName: {
    color: "black",
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  lastMessage: {
    fontSize: 14,
    color: "grey",
  },
  messageTextContainer: {
    flex: 1,
    width: "95%",
    justifyContent: "flex-start",
  },
  timestampContainer:{
    paddingTop: 20,
    paddingBottom: 20,
  },
  messageTimestamp:{
    color: "#777777",
    fontSize: 12,
    fontWeight: "600",
    position: "absolute"
  }
});

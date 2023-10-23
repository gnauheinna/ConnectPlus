import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./ProfileStyles";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import { TouchableOpacity } from "react-native-gesture-handler";
/*
using material ui library, help me to create a profile page using typescript in react native
first step create a container for the page
second step create a title bar
third step create a profile image
fourth step create a name on top of the profile image
fifth step create a bio section
sixth step create a horizontal scroll view display 3 sections:"Posts","Mentions","About"
seventh step create a card as a placeholder for About section
help me write code for the profile page
*/


export default function App() {
return (
<View style={styles.container}>
    {/* <View style={styles.profileInfoContainer}> */}
        <LinearGradient
        style={styles.profileInfoContainer}
        locations={[0, 1]}
        colors={["#fff", "#ffe59a"]}>

            {/* Display the user's profile picture */}
            <View style={styles.profileImg}>
                <Image
                source={require('../../assets/images/profile/avatars--3d-avatar-12.png')}
                style={styles.profileImage}
                resizeMode="center"/>
                {/* Display the icon for editing the profile picture */}
                <TouchableOpacity style={styles.editBtn}>
                    <MaterialIcons name="edit" size={20} color="#ffffff" />
                </TouchableOpacity>
            </View>

            {/* Display the user's full name */}
            <View style={styles.infoContainer}>
                <Text style={[styles.userName]}>Jane Jones</Text>
                <Text style={[styles.userIntro]}>Class of 2024, Data Science Major</Text>
            </View>
        </LinearGradient>
    {/* </View> */}

    <View style={styles.horizontalBar}>
        {/* <View style={styles.tagBox}> */}
            <Text style={[styles.horizontalBarOptions, { marginRight: 20 }]}>Posts</Text>
        {/* </View> */}
        {/* <View style={styles.tagBox}> */}
            <Text style={[styles.horizontalBarOptions]}>Mentions</Text>
        {/* </View> */}
    </View>
</View>
);
}

const styles = StyleSheet.create({
container:{
    backgroundColor: "#fff",
},
profileInfoContainer:{
    flex:1,
    padding: 0,
    marginBottom: 0,
},
titleBar:{
    justifyContent:"space-between",
    marginTop:24,
    marginHorizontal:16,
},
profileImg:{
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: -70,
    marginTop: 100,
},
profileImage:{
    width:120,
    height:120,
    borderRadius:100,
    overflow:"hidden",
},
editBtn:{
    backgroundColor:"#41444B",
    position:"absolute",
    bottom:0,
    right:0,
    width:30,
    height:30,
    borderRadius:30,
    alignItems:"center",
    justifyContent:"center",
},
userName:{
    fontWeight: 'bold', 
    fontSize: 30,
    color:"#000000",
    marginBottom: 10,
},
userIntro:{
    fontSize: 16,
    color:"#000000",
    marginBottom: 30,
},
infoContainer:{
    alignSelf:"center",
    alignItems:"center",
    marginTop:16,
},
horizontalBar:{
    flexDirection:"row",
    alignSelf:"center",
    marginTop: 32,
},
horizontalBarOptions: {
    fontSize: 16,
},
})






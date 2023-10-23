import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./ProfileStyles";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import CardContent from 'react-native-paper/lib/typescript/components/Card/CardContent';
import { TouchableOpacity } from "react-native-gesture-handler";
import IndividualPost from "../../components/individualPost";



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
                style={styles.profileImage}/>
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

            {/* Display Posts and Mentions */}
            <View style={styles.horizontalBar}>
                <TouchableOpacity style={styles.postsContainer}>
                    <Text>Posts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.mentionsContainer}>
                    <Text>Mentions</Text>
                </TouchableOpacity>
            </View>
            {/* Display only the Borderline */}
            <View style={styles.borderLine}></View>
               

                

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
    height: "100%",
    width:"100%",
},
// titleBar:{
//     justifyContent:"space-between",
//     marginTop:24,
//     marginHorizontal:16,
// },
profileImg:{
    flexDirection: "row",
    justifyContent: "center",
    marginRight: -70,
    marginTop: 100,
    marginHorizontal: -61,
},
profileImage:{
    width:120,
    height:120,
    borderRadius:100,
    overflow:"hidden",
    justifyContent: "center",
    marginHorizontal: -10,
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
    justifyContent:"space-evenly",
    marginTop: 20,
},
// horizontalBarOptions: {
//     padding: 10,
//     borderBottomColor: "black",
//     borderBottomWidth: 2,
//     marginTop: -17,
// },
postsContainer:{
    padding: 10,
    marginTop: -17,
    fontWeight: 'bold', 
},
borderLine: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 150,
},
mentionsContainer:{
    padding: 10,
    marginTop: -17,
    fontWeight: 'bold', 
}
})






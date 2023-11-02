import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, useColorScheme } from "react-native";
import PlusButton from "../../components/postButton";
import Colors from "../../constants/Colors";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { useUser, UserProvider } from "../context/UserContext";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { isLoggedIn } = useContext(AuthContext);
  const { user } = useUser();

  return (
    <UserProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        }}
      >
        {isLoggedIn && (
          <Tabs.Screen
            name="journeys"
            options={{
              title: "Journeys",
              tabBarIcon: ({ color }) => (
                <AntDesign name="filetext1" size={24} color="black" />
              ),
            }}
          />
        )}
        {isLoggedIn && user && (
          <Tabs.Screen
            name="community" // Update the name to include the folder path
            options={{
              title: "Community",
              tabBarIcon: ({ color }) => (
                <Ionicons name="people" size={26} color="black" />
              ),
              headerRight: () => (
                <Link href="/modal" asChild>
                  <Pressable>
                    {({ pressed }) => (<FontAwesome name="info-circle" size={25} color={Colors[colorScheme ?? "light"].text} style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} />)}
                  </Pressable>
                </Link>),}}/>
        )}
        {isLoggedIn && (
          <Tabs.Screen
            name="messages"
            options={{
              title: "Messages",
              tabBarIcon: ({ color }) => (
                <AntDesign name="message1" size={24} color="black" />
              ),
            }}
          />
        )}
        {isLoggedIn && (
          <Tabs.Screen
            name="profile"
            options={{
              title: "Profile",
              tabBarIcon: ({ color }) => (
                <AntDesign name="idcard" size={24} color="black" />
              ),
            }}
          />
        )}
      </Tabs>
    </UserProvider>
  );
}

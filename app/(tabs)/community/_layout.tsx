import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import { Text } from "../../../components/Themed";
import { PostIdProvider } from "../../context/PostIDContext";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

export default function CommunityPageLayout() {
  const colorScheme = useColorScheme();
  return (
    <PostIdProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="comm" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </PostIdProvider>
  );
}

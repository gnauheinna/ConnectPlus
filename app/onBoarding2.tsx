import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, Color } from "./GlobalStyles";

export default function onBoarding2Screen() {
  return (
    <View style={styles.iphone142}>
      <View style={[styles.phoneBar, styles.phoneBarPosition]}>
        <View style={[styles.phoneBarChild, styles.statusPosition]} />
        <View style={[styles.statusBar, styles.statusPosition]}>
          <View style={[styles.phoneBarChild, styles.statusPosition]} />
        </View>
      </View>
      <Text style={[styles.lastStepsTell, styles.doneTypo]}>
        Last Steps! Tell us what you’re looking for!
      </Text>
      <View style={[styles.iphone142Child, styles.iphone142Layout]} />
      <View style={[styles.iphone142Item, styles.iphone142Layout]} />
      <Image
        style={[styles.iphone142Inner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-6.png")}
      />
      <View style={[styles.rectangleView, styles.iphone142Layout]} />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-7.png")}
      />
      <View style={[styles.iphone142Child1, styles.iphone142ChildLayout3]} />
      <Image
        style={[styles.iphone142Child2, styles.iphone142ChildPosition]}
        contentFit="cover"
        source={require("../assets/images/ellipse-8.png")}
      />
      <View style={[styles.iphone142Child3, styles.iphone142ChildLayout3]} />
      <View style={[styles.iphone142Child4, styles.iphone142ChildLayout3]} />
      <View style={[styles.iphone142Child5, styles.iphone142ChildLayout2]} />
      <View style={[styles.iphone142Child6, styles.iphone142ChildLayout2]} />
      <View style={[styles.iphone142Child7, styles.iphone142ChildLayout2]} />
      <View style={[styles.iphone142Child8, styles.iphone142ChildLayout1]} />
      <View style={[styles.iphone142Child9, styles.iphone142ChildLayout1]} />
      <View style={[styles.iphone142Child10, styles.iphone142ChildLayout1]} />
      <Image
        style={[styles.iphone142Child11, styles.iphone142ChildPosition]}
        contentFit="cover"
        source={require("../assets/images/ellipse-5.png")}
      />
      <LinearGradient
        style={[styles.rectangleLineargradient, styles.iphone142Child12Bg]}
        locations={[0.71, 1]}
        colors={["rgba(255, 255, 255, 0)", "#fff"]}
      />
      <LinearGradient
        style={[styles.iphone142Child12, styles.iphone142Child12Bg]}
        locations={[0.66, 1]}
        colors={["#d9d9d9", "#f5f5f5"]}
      />
      <View style={[styles.iphone142Child13, styles.iphone142ChildBg]} />
      <View style={[styles.iphone142Child14, styles.iphone142ChildBg]} />
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      <View style={[styles.iphone142Child14, styles.iphone142ChildBg]} />
      <Text style={[styles.done, styles.doneTypo]}>Done</Text>
      <Text style={[styles.skip, styles.doneTypo]}>Skip</Text>
      <Image
        style={[styles.iphone142Child16, styles.iphone142ChildLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-3.png")}
      />
      <Image
        style={[styles.iphone142Child17, styles.iphone142ChildLayout]}
        contentFit="cover"
        source={require("../assets/images/ellipse-4.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  phoneBarPosition: {
    left: 0,
    position: "absolute",
  },
  statusPosition: {
    left: "0%",
    bottom: "0%",
    position: "absolute",
  },
  lightSpaceBlock: {
    marginLeft: 3.58,
    height: 13,
  },
  doneTypo: {
    textAlign: "left",
    fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iphone142Layout: {
    height: 106,
    width: 100,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 7,
    top: 235,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 21,
    width: 21,
    top: 239,
    position: "absolute",
  },
  iphone142ChildLayout3: {
    top: 358,
    height: 106,
    width: 100,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 7,
    position: "absolute",
  },
  iphone142ChildPosition: {
    left: 95,
    height: 21,
    width: 21,
    position: "absolute",
  },
  iphone142ChildLayout2: {
    top: 481,
    height: 106,
    width: 100,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 7,
    position: "absolute",
  },
  iphone142ChildLayout1: {
    top: 602,
    height: 106,
    width: 100,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 7,
    position: "absolute",
  },
  iphone142Child12Bg: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  iphone142ChildBg: {
    backgroundColor: Color.colorDarkgray,
    position: "absolute",
  },
  iphone142ChildLayout: {
    height: 9,
    width: 9,
    top: 798,
    position: "absolute",
  },
  phoneBarChild: {
    backgroundColor: Color.colorGainsboro_200,
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  notchIcon: {
    top: 0,
    right: 0,
    maxWidth: "100%",
    height: 27,
    overflow: "hidden",
  },
  networkSignalLight: {
    width: 18,
    height: 13,
  },
  wifiSignalLight: {
    width: 14,
  },
  batteryLight: {
    width: 22,
  },
  statusIcons: {
    top: 14,
    right: 12,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 7,
    right: 63,
    width: 5,
    height: 5,
    position: "absolute",
  },
  timeLight: {
    top: 11,
    borderRadius: 18,
    width: 48,
    height: 19,
    left: 19,
    position: "absolute",
    overflow: "hidden",
  },
  statusBar1: {
    height: "93.62%",
    width: "98.13%",
    top: "6.38%",
    right: "1.87%",
    overflow: "hidden",
  },
  statusBar: {
    right: "0%",
    top: "0%",
    height: "100%",
    bottom: "0%",
    width: "100%",
  },
  phoneBar: {
    top: 5,
    width: 390,
    height: 42,
  },
  lastStepsTell: {
    top: 117,
    fontSize: 30,
    color: "#000",
    width: 349,
    height: 34,
    left: 19,
  },
  iphone142Child: {
    left: 22,
  },
  iphone142Item: {
    left: 138,
  },
  iphone142Inner: {
    left: 211,
  },
  rectangleView: {
    left: 253,
  },
  ellipseIcon: {
    left: 326,
  },
  iphone142Child1: {
    left: 22,
  },
  iphone142Child2: {
    top: 363,
  },
  iphone142Child3: {
    left: 138,
  },
  iphone142Child4: {
    left: 253,
  },
  iphone142Child5: {
    left: 22,
  },
  iphone142Child6: {
    left: 138,
  },
  iphone142Child7: {
    left: 253,
  },
  iphone142Child8: {
    left: 22,
  },
  iphone142Child9: {
    left: 138,
  },
  iphone142Child10: {
    left: 253,
  },
  iphone142Child11: {
    top: 239,
    left: 95,
  },
  rectangleLineargradient: {
    top: 276,
    left: 8,
    width: 367,
    height: 434,
  },
  iphone142Child12: {
    top: 236,
    left: 361,
    width: 12,
    height: 521,
  },
  iphone142Child13: {
    top: 240,
    left: 363,
    width: 8,
    height: 40,
  },
  iphone142Child14: {
    top: 725,
    left: 31,
    width: 323,
    height: 48,
  },
  done: {
    top: 734,
    left: 156,
    fontSize: 24,
    color: Color.colorWhite,
  },
  skip: {
    top: 200,
    left: 319,
    fontSize: 16,
    color: Color.colorDarkgray,
  },
  iphone142Child16: {
    left: 189,
  },
  iphone142Child17: {
    left: 175,
  },
  iphone142: {
    borderRadius: 32,
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

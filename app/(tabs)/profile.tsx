import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, Padding, Border, FontSize } from "./ProfileStyles";

const IPhone1415Pro7 = () => {
  return (
    <View style={styles.iphone1415Pro7}>
      <Text style={[styles.more, styles.moreFlexBox]}>(more)</Text>
      <View style={styles.iphone1415Pro7Child} />
      <View style={[styles.iphone1415Pro7Item, styles.iphone1415Layout]} />
      <View style={styles.iphone1415Pro7Inner} />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector.png")}
      />
      <View style={styles.lineView} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector1.png")}
      />
      <Text style={[styles.helpful35Container, styles.sept24Clr]}>
        <Text style={styles.sept24Typo}>Helpful</Text>
        <Text style={styles.text}> - 35</Text>
      </Text>
      <Text style={[styles.sept24, styles.sept24Typo]}>Sept. 24</Text>
      <Image
        style={styles.iphone1415Pro7Child1}
        contentFit="cover"
        source={require("../../assets/images/profile/vector-6.png")}
      />
      <Image
        style={styles.iphone1415Pro7Child2}
        contentFit="cover"
        source={require("../../assets/images/profile/vector-7.png")}
      />
      <Text style={[styles.more, styles.moreFlexBox]}>(more)</Text>
      <View style={styles.iphone1415Pro7Child} />
      <View style={[styles.iphone1415Pro7Child3, styles.iphone1415Layout]} />
      <View style={styles.iphone1415Pro7Inner} />
      <Image
        style={[styles.vectorIcon3, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector.png")}
      />
      <View style={styles.iphone1415Pro7Child5} />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector1.png")}
      />
      <Text style={[styles.helpful35Container, styles.sept24Clr]}>
        <Text style={styles.sept24Typo}>Helpful</Text>
        <Text style={styles.text}> - 35</Text>
      </Text>
      <Text style={[styles.sept24, styles.sept24Typo]}>Sept. 24</Text>
      <Image
        style={styles.iphone1415Pro7Child1}
        contentFit="cover"
        source={require("../../assets/images/profile/vector-6.png")}
      />
      <Image
        style={styles.iphone1415Pro7Child2}
        contentFit="cover"
        source={require("../../assets/images/profile/vector-7.png")}
      />
      <LinearGradient
        style={styles.rectangleLineargradient}
        locations={[0, 0.9]}
        colors={["#fff", "#ffe59a"]}
      />
      <Text style={[styles.janeJones, styles.moreFlexBox]}>Jane Jones</Text>
      <View style={styles.dAvatars12}>
        <Image
          style={[styles.avatars3dAvatar12, styles.vectorIcon7Position]}
          contentFit="cover"
          source={require("../../assets/images/profile/avatars--3d-avatar-12.png")}
        />
      </View>
      <Text style={[styles.posts, styles.postsTypo]}>Posts</Text>
      <Text style={[styles.mentions, styles.postsTypo]}>Mentions</Text>
      <Text style={[styles.about, styles.postsTypo]}>About</Text>
      <Text style={[styles.juniorMajoringIn, styles.postsTypo]}>
        Junior Majoring in CS
      </Text>
      <View
        style={[styles.iphone1415Pro7Child8, styles.iphone1415ChildPosition]}
      />
      <View
        style={[styles.iphone1415Pro7Child9, styles.iphone1415ChildPosition]}
      />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../../assets/images/profile/ellipse-12.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/group.png")}
      />
      <View style={styles.iphone1415Pro7Child10} />
      <View style={styles.iphone1415Pro7Child11} />
      <View style={styles.iphone1415Pro7Child12} />
      <Image
        style={[styles.vectorIcon11, styles.iconLayout]}
        contentFit="cover"
        source={require("../../assets/images/profile/vector7.png")}
      />
      <View style={[styles.lightScheme, styles.lightSchemeBorder]}>
        <View style={[styles.richTooltip, styles.richShadowBox]}>
          <View style={styles.content}>
            <Text
              style={[styles.subhead, styles.subheadFlexBox]}
            >{`Contact Information `}</Text>
            <Text
              style={[styles.supportingText, styles.subheadFlexBox]}
            >{`Email: janejones@bu.edu
Linkedine Link: http.linkedinjanejones`}</Text>
          </View>
          <View style={[styles.actions, styles.actionsFlexBox]}>
            <View style={[styles.primaryButton, styles.buttonFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTypo]}>Action</Text>
              </View>
            </View>
            <View style={[styles.secondaryButton, styles.buttonFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTypo]}>Action</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.label, styles.labelPosition]}>
          <Text style={[styles.label1, styles.labelTypo]}>About Me</Text>
        </View>
        <View style={[styles.richTooltip1, styles.richShadowBox]}>
          <View style={styles.content}>
            <Text
              style={[styles.subhead, styles.subheadFlexBox]}
            >{`Experience `}</Text>
            <Text
              style={[styles.supportingText, styles.subheadFlexBox]}
            >{`STEM Study Abroad 
Capital One Internship 
CS Major
Business Minor`}</Text>
          </View>
          <View style={[styles.actions, styles.actionsFlexBox]}>
            <View style={[styles.primaryButton, styles.buttonFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTypo]}>Action</Text>
              </View>
            </View>
            <View style={[styles.secondaryButton, styles.buttonFlexBox]}>
              <View style={[styles.stateLayer, styles.buttonFlexBox]}>
                <Text style={[styles.labelText, styles.labelTypo]}>Action</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  moreFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Layout: {
    height: 39,
    width: 184,
    borderRadius: 43,
    top: 930,
    left: 23,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorIconLayout: {
    width: "4.65%",
    height: "2.38%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  sept24Clr: {
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  sept24Typo: {
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  vectorIcon7Position: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  postsTypo: {
    color: Color.m3Black,
    fontSize: 15,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415ChildPosition: {
    height: 2,
    borderTopWidth: 2,
    top: 394,
    borderStyle: "solid",
    position: "absolute",
  },
  groupChildPosition: {
    bottom: "7.14%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  labelPosition: {
    zIndex: 1,
    position: "absolute",
  },
  lightSchemeBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  richShadowBox: {
    paddingBottom: Padding.p_5xs,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    backgroundColor: Color.m3SysLightSurfaceContainer,
    borderRadius: Border.br_xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    overflow: "hidden",
  },
  subheadFlexBox: {
    color: Color.m3SysLightOnSurfaceVariant,
    alignSelf: "stretch",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3BodyMedium_size,
    textAlign: "left",
  },
  actionsFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  buttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    fontFamily: FontFamily.m3TitleSmall,
    fontWeight: "500",
  },
  more: {
    top: 884,
    left: 289,
    fontSize: 13,
    color: Color.colorCornflowerblue,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415Pro7Child: {
    top: 918,
    left: 17,
    borderBottomRightRadius: Border.br_xs,
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorMediumpurple_100,
    width: 360,
    height: 62,
    position: "absolute",
  },
  iphone1415Pro7Item: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    height: 39,
    width: 184,
    borderRadius: 43,
    top: 930,
  },
  iphone1415Pro7Inner: {
    top: 928,
    left: 157,
    borderTopRightRadius: 41,
    borderBottomRightRadius: 41,
    width: 55,
    height: 43,
    position: "absolute",
  },
  vectorIcon: {
    right: "39.19%",
    left: "54.96%",
    bottom: "-12.56%",
    width: "5.85%",
    height: "2.35%",
    maxWidth: "100%",
    top: "110.21%",
    position: "absolute",
  },
  lineView: {
    top: 931,
    left: 161,
    borderRightWidth: 0.9,
    width: 1,
    height: 39,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon1: {
    right: "86.95%",
    bottom: "-12.59%",
    left: "8.4%",
    top: "110.21%",
    width: "4.65%",
    height: "2.38%",
  },
  vectorIcon2: {
    top: "112.56%",
    right: "46.42%",
    bottom: "-14.94%",
    left: "48.93%",
  },
  text: {
    fontWeight: "300",
    fontFamily: FontFamily.interLight,
  },
  helpful35Container: {
    top: 941,
    left: 62,
    width: 89,
    height: 23,
    fontSize: 15,
    color: Color.colorDarkslategray_100,
  },
  sept24: {
    top: 940,
    left: 302,
    fontSize: FontSize.size_sm_9,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  iphone1415Pro7Child1: {
    top: 942,
    left: 37,
    width: 10,
    height: 15,
    position: "absolute",
  },
  iphone1415Pro7Child2: {
    top: 944,
    height: 3,
    left: 44,
    width: 1,
    position: "absolute",
  },
  iphone1415Pro7Child3: {
    height: 39,
    width: 184,
    borderRadius: 43,
    top: 930,
  },
  vectorIcon3: {
    right: "38.17%",
    left: "55.98%",
    bottom: "-12.56%",
    width: "5.85%",
    height: "2.35%",
    maxWidth: "100%",
    top: "110.21%",
    position: "absolute",
  },
  iphone1415Pro7Child5: {
    left: 160,
    borderColor: "#e6dbf3",
    borderRightWidth: 2,
    width: 2,
    height: 40,
    borderStyle: "solid",
    top: 930,
    position: "absolute",
  },
  rectangleLineargradient: {
    top: -46,
    left: -11,
    width: 437,
    height: 392,
    backgroundColor: "transparent",
    position: "absolute",
  },
  janeJones: {
    top: 85,
    left: 134,
    fontSize: 22,
    fontFamily: FontFamily.stolzl,
    color: "#222",
  },
  avatars3dAvatar12: {
    borderRadius: 59,
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    height: "100%",
  },
  dAvatars12: {
    top: 120,
    left: 139,
    width: 112,
    height: 112,
    position: "absolute",
  },
  posts: {
    left: 57,
    top: 362,
    color: Color.m3Black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  mentions: {
    left: 168,
    top: 362,
    color: Color.m3Black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  about: {
    left: 299,
    top: 362,
    color: Color.m3Black,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
  },
  juniorMajoringIn: {
    top: 251,
    left: 125,
    fontFamily: FontFamily.interRegular,
  },
  iphone1415Pro7Child8: {
    left: -1,
    borderColor: "#d9d9d9",
    width: 401,
  },
  iphone1415Pro7Child9: {
    left: 274,
    borderColor: Color.m3Black,
    width: 120,
  },
  ellipseIcon: {
    top: 51,
    left: 330,
    width: 46,
    height: 46,
    position: "absolute",
  },
  groupIcon: {
    height: "3.33%",
    width: "7.12%",
    top: "6.92%",
    right: "6.62%",
    bottom: "89.75%",
    left: "86.26%",
    position: "absolute",
  },
  iphone1415Pro7Child10: {
    top: 767,
    left: -21,
    shadowColor: "rgba(0, 0, 0, 0.09)",
    shadowRadius: 21,
    elevation: 21,
    width: 423,
    height: 96,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -4,
    },
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  iphone1415Pro7Child11: {
    top: 780,
    left: 315,
    borderRadius: 18,
    backgroundColor: "rgba(120, 93, 189, 0.33)",
    width: 59,
    height: 45,
    position: "absolute",
  },
  groupChild: {
    height: "85.71%",
    width: "6.47%",
    top: "7.14%",
    right: "69.34%",
    left: "24.19%",
  },
  vectorIcon6: {
    height: "82.14%",
    width: "10.03%",
    top: "10.71%",
    right: "89.97%",
    left: "0%",
  },
  vectorIcon7: {
    width: "9.06%",
    right: "46.12%",
    left: "44.83%",
  },
  vectorIcon8: {
    borderRadius: 10,
    width: 31,
    height: 26,
    zIndex: 0,
  },
  vectorIcon9: {
    height: "19.9%",
    width: "42.41%",
    top: "47.19%",
    right: "28.8%",
    bottom: "32.91%",
    left: "28.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  vectorParent: {
    top: 3,
    left: 227,
    borderRadius: 35,
    width: 29,
    position: "absolute",
  },
  vectorIcon10: {
    height: "71.43%",
    width: "8.41%",
    top: "17.86%",
    bottom: "10.71%",
    left: "91.59%",
    right: "0%",
    position: "absolute",
  },
  groupParent: {
    height: "3.52%",
    width: "84.3%",
    top: "92.49%",
    right: "8.83%",
    bottom: "3.99%",
    left: "6.87%",
    position: "absolute",
  },
  iphone1415Pro7Child12: {
    top: 205,
    left: 218,
    borderRadius: 30,
    backgroundColor: Color.colorDarkslategray_100,
    borderColor: Color.colorDarkslategray_100,
    borderWidth: 1.9,
    width: 27,
    height: 27,
    borderStyle: "solid",
    position: "absolute",
  },
  vectorIcon11: {
    height: "1.64%",
    width: "3.56%",
    top: "24.82%",
    right: "38.98%",
    bottom: "73.54%",
    left: "57.46%",
    position: "absolute",
  },
  subhead: {
    fontFamily: FontFamily.m3TitleSmall,
    fontWeight: "500",
  },
  supportingText: {
    fontFamily: FontFamily.m3BodyMedium,
    marginTop: 4,
  },
  content: {
    width: 312,
    paddingHorizontal: Padding.p_base,
    paddingTop: Padding.p_xs,
    paddingBottom: Padding.p_9xs,
  },
  labelText: {
    color: Color.m3SysLightPrimary,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.m3BodyMedium_size,
    fontFamily: FontFamily.m3TitleSmall,
    letterSpacing: 0,
  },
  stateLayer: {
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_3xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    flex: 1,
  },
  primaryButton: {
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    height: 40,
    overflow: "hidden",
  },
  secondaryButton: {
    marginLeft: 8,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    height: 40,
    overflow: "hidden",
    display: "none",
  },
  actions: {
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    marginTop: 8,
    display: "none",
    alignItems: "center",
  },
  richTooltip: {
    zIndex: 0,
  },
  label1: {
    top: 0,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
    fontFamily: FontFamily.m3TitleSmall,
    color: Color.m3Black,
    left: 44,
    textAlign: "left",
    position: "absolute",
  },
  label: {
    top: 7,
    left: 89,
    width: 174,
    height: 24,
  },
  richTooltip1: {
    zIndex: 2,
    marginTop: 40,
  },
  lightScheme: {
    top: 423,
    borderRadius: 16,
    backgroundColor: Color.m3SysLightSurface,
    borderColor: "#cac4d0",
    height: 329,
    paddingHorizontal: Padding.p_xl,
    paddingTop: 40,
    paddingBottom: Padding.p_xl,
    alignItems: "center",
    borderWidth: 1,
    left: 23,
    position: "absolute",
  },
  iphone1415Pro7: {
    borderRadius: 32,
    height: 852,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    width: "100%",
    flex: 1,
  },
});

export default IPhone1415Pro7;

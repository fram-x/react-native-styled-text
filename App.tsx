/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import StyledText from "./lib";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StyledText style={styles.welcome} textStyles={textStyles}>
          {
            "Welcome to <b>React <u>Native</u> <demo><i>Styled</i> Text</demo></b> demo!"
          }
        </StyledText>
        <StyledText style={styles.instruction} textStyles={textStyles}>
          {"Run <code>yarn add react-native-styled-text</code> to install"}
        </StyledText>
        <View style={styles.jsxContainer}>
          <StyledText style={styles.jsx} textStyles={jsxStyles}>
            {"<ltgt>&lt;</ltgt><comp>StyledText</comp>"}
          </StyledText>
          <StyledText
            style={[styles.jsx, styles.jsxProp]}
            textStyles={jsxStyles}
          >
            {"style<eq>=</eq><brace>{</brace>styles.header<brace>}</brace>"}
          </StyledText>
          <StyledText style={styles.jsx} textStyles={jsxStyles}>
            {"<ltgt>></ltgt>"}
          </StyledText>
          <StyledText
            style={[styles.jsx, styles.jsxProp]}
            textStyles={jsxStyles}
          >
            {
              '<brace>{</brace><string>"Ha&lt;i&gt;pp&lt;/i&gt;y &lt;b&gt;Styling&lt;/b&gt;!"<brace>}</brace>'
            }
          </StyledText>
          <StyledText style={styles.jsx} textStyles={jsxStyles}>
            {"<ltgt>&lt;/</ltgt><comp>StyledText</comp><ltgt>></ltgt>"}
          </StyledText>
        </View>
        <StyledText style={styles.header}>
          {"Ha<i>pp</i>y <b>Styling</b>!"}
        </StyledText>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 16,
    textAlign: "center",
    padding: 10,
  },
  instruction: {
    fontSize: 14,
    textAlign: "left",
    color: "#333333",
    padding: 10,
  },
  header: {
    fontSize: 20,
    color: "orange",
    textAlign: "center",
    padding: 10,
  },
  jsxContainer: {
    backgroundColor: "#333",
    padding: 10,
  },
  jsx: {
    textAlign: "left",
    paddingLeft: 10,
    paddingVertical: 0,
    fontWeight: "500",
    fontSize: 12,

    fontFamily: "courier",
  },
  jsxProp: {
    paddingLeft: 25,
    color: "#8EDDFF",
  },
});

const textStyles = StyleSheet.create({
  demo: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: "#555555",
    textShadowRadius: 6,
    fontSize: 18,
    color: "#22AA44",
  },
  code: {
    fontWeight: "bold",
    fontFamily: "courier",
    fontSize: 18,
  },
});

const jsxStyles = StyleSheet.create({
  ltgt: {
    color: "#888",
  },
  comp: {
    color: "#00CCB0",
  },
  eq: {
    color: "white",
  },
  brace: {
    color: "#4797D6",
  },
  string: {
    color: "#D68E76",
  },
});

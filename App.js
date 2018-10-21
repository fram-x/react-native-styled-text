/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import { StyledText } from './lib';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <StyledText 
          text="Welcome to <b><u>React Native</u> <demo>Styled Text</demo></b> demo!"
          style={styles.welcome}
          textStyles={textStyles}
        />
        <StyledText 
          text="Run <code>yarn add react-native-styled-text</code> to install"
          style={styles.instruction}
          textStyles={textStyles}
        />
        <View style={styles.jsxContainer}>
          <StyledText
            text={'<ltgt>&lt;</ltgt><comp>StyledText</comp>'}
            style={styles.jsx}
            textStyles={jsxStyles}
          />
          <StyledText
            text={'text<eq>=</eq><string>"Ha&lt;i&gt;pp&lt;/i&gt;y &lt;b&gt;Styling&lt;/b&gt;!"'}
            style={[styles.jsx, styles.jsxProp]}
            textStyles={jsxStyles}
          />
          <StyledText
            text={"style<eq>=</eq><brace>{</brace>styles.header<brace>}</brace>"}
            style={[styles.jsx, styles.jsxProp]}
            textStyles={jsxStyles}
          />
          <StyledText
            text="<ltgt>/></ltgt>"
            style={styles.jsx}
            textStyles={jsxStyles}
          />
        </View>
        <StyledText
          text="Ha<i>pp</i>y <b>Styling</b>!"
          style={styles.header}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  instruction: {
    fontSize: 14,
    textAlign: 'left',
    color: '#333333',
    padding: 10,
  },
  header: {
    fontSize: 20,
    color: 'orange',
    textAlign: 'center',
    padding: 10,
  },
  jsxContainer: {
    backgroundColor: '#333',
    padding: 10,
  },
  jsx: {
    textAlign: 'left',
    paddingLeft: 10,
    paddingVertical: 4,
    fontWeight: '500',
    fontSize: 12,
    fontFamily: 'courier',
  },
  jsxProp: {
    paddingLeft: 25,
    color: '#8EDDFF',
  },
});

const textStyles = StyleSheet.create({
  demo: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: '#555555',
    textShadowRadius: 6,
    fontSize: 18,
    fontStyle: 'italic',
    color: '#22AA44',
  },
  code: {
    fontWeight: 'bold',
    fontFamily: 'courier',
    fontSize: 18,
  }
});

const jsxStyles = StyleSheet.create({
  ltgt: {
    color: '#888',
  },
  comp: {
    color: '#00CCB0',
  },
  eq: {
    color: 'white',
  },
  brace: {
    color: '#4797D6',
  },
  string: {
    color: '#D68E76',
  }
});
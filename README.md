# Styled Text for React Native

<a href="https://www.npmjs.com/package/react-native-styled-text">
  <img src="https://img.shields.io/npm/v/react-native-styled-text.svg?style=flat-square">
</a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>

## Introduction
The purpose of this library is to support easy rendering of mixed text styles.

<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/example-ios.png" width="400" />
<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/example-android.png" width="400" />

The library implements a `StyledText` component taking an HTML-like text and a styles object as input properties.

## Installation
To install the library into your project, run yarn or npm:

`yarn add react-native-styled-text`

or

`npm i react-native-styled-text`

## Examples

### Using default styles
For simple styling `StyledText` supports some predefined styles: 

* b: **bold**
* i: *italic*
* u: underline

Example:

```javascript
import { StyleSheet } from 'react-native';
import { StyledText } from 'react-native-styled-text';

...
  <StyledText
    text="Ha<i>pp</i>y <b>Styling</b>!"
    style={styles.header}
  />
...

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    color: 'orange',
    textAlign: 'center',
    padding: 30,
  },
});

```

Renders as

<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/happyStyling.png" width="200">

### Using custom styles
For richer styling, you set the `textStyles` property of `StyledText` to an object (`StyleSheet`) containing your custom text styles and apply the styles in the `text` property.

Example:

```javascript
import { StyleSheet } from 'react-native';
import { StyledText } from 'react-native-styled-text';

...
  <StyledText 
    text="Welcome to <b><u>React Native</u> <demo><i>Styled</i> Text</demo></b> demo!"
    style={styles.welcome}
    textStyles={textStyles}
  />
...

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    padding: 30,
  },
});

const textStyles = StyleSheet.create({
  demo: {
    textShadowOffset: { width: 2, height: 2 },
    textShadowColor: '#555555',
    textShadowRadius: 6,
    fontSize: 24,
    color: '#22AA44',
  },
});

```

Renders as

<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/welcome.png" width="280">


## API
`StyledText` exposes the following properties:

| Name | Description |
| ---- | ----------- |
| text | String with style tags for mixed styling of the text. Each style tag must match one of the styles provided in textStyles or one of the default styles, see below. |
| style | Base style for the component, typically including layout properties. (Optional) |
| textStyles | Object (`StyleSheet`) containing definition of the styles used in the provided text. (Optional) |

The following default styles are defined:

| Name | Description |
| ---- | ----------- |
| b | **bold** |
| i | *italic* |
| u | underline |



### Contributors
Bjørn Egil Hansen (@bjornegil)

### Sponsors
[Fram X](https://framx.no) - a cross platform app company from Norway. 
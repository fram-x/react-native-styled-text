# Styled Text for React Native

<a href="https://www.npmjs.com/package/react-native-styled-text">
  <img src="https://img.shields.io/npm/v/react-native-styled-text.svg?style=flat-square">
</a>
<a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg"></a>

## Introduction

The purpose of this library is to support easy rendering of mixed text styles.

<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/example-ios.png" width="400" />
<img src="https://github.com/fram-x/react-native-styled-text/raw/develop/docs/example-android.png" width="400" />

The library implements a `StyledText` component taking an HTML-like string in the `children` property and an optional text styles property.

## Try it out

Online demo on [expo.io](https://snack.expo.io/@bjorn.egil/styledtext-demo)

## Installation

To install the library into your project, run yarn or npm:

`yarn add react-native-styled-text`

or

`npm i react-native-styled-text`

## Examples

### Using default styles

For simple styling `StyledText` supports some predefined styles:

- b: **bold**
- i: _italic_
- u: underline

Example:

```javascript
import { StyleSheet } from 'react-native';
import StyledText from 'react-native-styled-text';

...
  <StyledText
    style={styles.header}
  >
    {"Ha<i>pp</i>y <b>Styling</b>!"}
  </StyledText>
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

For richer styling, you set the `textStyles` property of `StyledText` to an object (e.g. `StyleSheet`) containing your custom text styles and apply these styles in the `text` property.

Example:

```javascript
import { StyleSheet } from 'react-native';
import StyledText from 'react-native-styled-text';

...
  <StyledText
    style={styles.welcome}
    textStyles={textStyles}
  >
    {"Welcome to <b><u>React Native</u> <demo><i>Styled</i> Text</demo></b> demo!"}
  </StyledText>
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

## How it works

Internally, the `render` function of `StyledText` parses the value of the `children` property, which must be a string, and returns a nested structure of React Native [`Text`](https://facebook.github.io/react-native/docs/text) components.

From the example above:

```javascript
<StyledText style={styles.header}>{'Ha<i>pp</i>y <b>Styling</b>!'}</StyledText>
```

would be transformed to:

```javascript
<Text style={styles.header}>
  Ha<Text style={defaultStyles.i}>pp</Text>y{' '}
  <Text style={defaultStyles.b}>Styling</Text>!
</Text>
```

So `StyledText` just provides a more compact, readable and flexible coding of nested `Text` components.

## API

In addition to the React Native `Text` properties, `StyledText` supports the following properties, with a restriction on the `children` proerty:

| Name       | Description                                                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children   | String with style tags for mixed styling of the text. Each style tag must match one of the styles provided in textStyles or one of the default styles, see below. (Optional) |
| textStyles | Object (e.g. `StyleSheet`) containing definition of the styles used in the provided text. (Optional)                                                                         |

The following default styles are defined:

| Name | Description |
| ---- | ----------- |
| b    | **bold**    |
| i    | _italic_    |
| u    | underline   |

### Contributors

Bjørn Egil Hansen (@bjornegil)

### Sponsors

[Fram X](https://framx.no) - a cross platform app company from Norway.

import * as React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { renderStyledText } from './renderer';

type Props = TextProps & {
  text: String,
  textStyles: StyleSheet.StyleSheet,
}

class StyledText extends React.PureComponent<Props> {
  render() {
    const { text, textStyles, ...textProps } = this.props;
    return renderStyledText(text, textStyles, textProps);
  }
}

export { StyledText };

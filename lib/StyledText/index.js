import * as React from 'react';
import { StyleSheet, TextProps } from 'react-native';

import { renderStyledText } from './renderer';

type Props = TextProps & {
  children: String,
  textStyles: StyleSheet.StyleSheet,
}

class StyledText extends React.PureComponent<Props> {
  render() {
    const { children, textStyles, ...textProps } = this.props;
    return renderStyledText(children, textStyles, textProps);
  }
}

export default StyledText;

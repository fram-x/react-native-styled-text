import * as React from 'react';
import { StyleSheet } from 'react-native';

import { renderStyledText } from './renderer';

type Props = {
  text: String,
  style: StyleSheet.Style,
  textStyles: StyleSheet.StyleSheet,
}

class StyledText extends React.Component<Props> {
  shouldComponentUpdate = (nextProps) => {
    return (
      this.props.text !== nextProps.text ||
      this.props.style !== nextProps.style ||
      this.props.textStyles !== nextProps.textStyles
    );
  }

  render() {
    const { text, style, textStyles } = this.props;
    return renderStyledText(text, style, textStyles);
  }
}

export { StyledText };

import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { parse, Mixed } from './parser';

const defaultStyles = {
  b: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic',
  },
};

const verifyTextStyles = (mixedText: Mixed, textStyles: Object) => {
  const styleNames = [];
  mixedText.map(element => {
    if (typeof element !== 'string') {
      const index = styleNames.indexOf(element.styleName);
      if (index < 0) {
        styleNames.push(element.styleName);
      }
    }
  });

  styleNames.forEach((styleName) => {
    if (!textStyles[styleName] && !defaultStyles[styleName]) {
      console.warn('react-native-styled-text: style "' + styleName + '" is not defined');
    }
  });
}

const renderMixedText = (mixedText: Mixed, textStyles: Object) => mixedText.map((element, index) => (
  typeof element === 'string'
    ? element
    : React.createElement(
      Text,
      { 
        style: textStyles[element.styleName] || defaultStyles[element.styleName], 
        key: index 
      },
      renderMixedText(element.mixedText, textStyles),
    )
));

export const renderStyledText = (text, style, textStyles) => {
  const mixedText = parse(text);
  const styles = textStyles || {}
  verifyTextStyles(mixedText, styles);

  const textElements = renderMixedText(mixedText, styles);

  return React.createElement(
    Text,
    { style: style },
    ...textElements,
  );
};

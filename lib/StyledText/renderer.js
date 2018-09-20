import * as React from 'react';
import { Text } from 'react-native';

import { parse, Mixed } from './parser';

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
    if (!textStyles[styleName]) {
      console.warn('react-native-styled-text: style "' + styleName + '" is not defined');
    }
  });
}

const renderMixedText = (mixedText: Mixed, textStyles: Object) => mixedText.map(element => (
  typeof element === 'string'
    ? element
    : React.createElement(
      Text,
      { style: textStyles[element.styleName] },
      renderMixedText(element.mixedText),
    )
));

export const renderStyledText = (text, style, textStyles) => {
  const mixedText = parse(text);
  verifyTextStyles(mixedText, textStyles);

  const textElements = renderMixedText(mixedText, textStyles);

  return React.createElement(
    Text,
    { style: style },
    ...textElements,
  );
};

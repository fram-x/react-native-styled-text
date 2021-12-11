import * as React from 'react';
import { Text } from 'react-native';

import { parse, Mixed } from './parser';
import { verifyChildrenProp, verifyTextStylesProp, verifyTextStyles } from './utils';

const defaultStyles = {
  b: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic',
  },
  u: {
    textDecorationLine: 'underline',
  }
};

const renderMixedText = (mixedText: Mixed, textStyles: Object) => mixedText.map((element, index) => (
  typeof element === 'string' || element === undefined || element === null
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

export const renderInnerStyledText = (children, textStyles) => {
  const text = verifyChildrenProp(children) ? children : undefined;
  const styles = verifyTextStylesProp(textStyles) ? (textStyles || {}) : {}

  const mixedText = parse(text);
  verifyTextStyles(mixedText, styles, defaultStyles);

  return renderMixedText(mixedText, styles);
};

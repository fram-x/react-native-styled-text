import React, {useMemo} from 'react';
import { Text } from 'react-native';

import { renderInnerStyledText } from './renderer';

const StyledText = (props) => {
  const { 
    children, 
    textStyles, 
    ...textProps 
  } = props;
  
  const innerTextElements = useMemo(() => renderInnerStyledText(children, textStyles), 
    [children, textStyles]
  );  

  return React.createElement(
    Text,
    textProps,
    innerTextElements,
  );
}

export default StyledText;

import { Mixed } from './parser';

const findAllTextStyles = (
  mixedText: Mixed, 
  accStyleNames: Array<string> = []
) : Array<string> => {
  mixedText.map(element => {
    if (!(typeof element === 'string' || element === undefined || element === null)) {
      const index = accStyleNames.indexOf(element.styleName);
      if (index < 0) {
        accStyleNames.push(element.styleName);
      }
 
      accStyleNames = findAllTextStyles(element.mixedText, accStyleNames);
    }
  });

  return accStyleNames;
}
  
const verifyTextStyles = (
  mixedText: Mixed, 
  textStyles: Object, 
  defaultStyles: Object
) => {
  const styleNames = findAllTextStyles(mixedText);
   
  styleNames.forEach((styleName) => {
    if (!textStyles[styleName] && !defaultStyles[styleName]) {
  	  console.warn('react-native-styled-text: style "' + styleName + '" is not defined');
    }
  });
}
  
export { verifyTextStyles };
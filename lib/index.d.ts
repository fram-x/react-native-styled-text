import * as React from 'react';
import { StyleSheet, TextProps } from 'react-native';

export interface Props extends TextProps {
    /**
     * HTML-like text containing style tags
     * e.g., `Welcome to <b><u>React Native</u> <demo><i>Styled</i> Text</demo></b> demo!`
     * where the style tags must be either one of the predefined tags: `<b>`, `<i>` or `<u>`
     * or refer to custom styles defined in the textStyles property, e.g. `<demo>`
     */
    children?: string;
    /**
     * Custom styles which may be used as style tags in the text property
     */
	textStyles?: object;
}

/**
 * Use StyledText for shorthand mixing of text styles with an HTML-like notation.
 * 
 * children should be an HTML-like text containing style tags
 * e.g., `Welcome to <b><u>React Native</u> <demo><i>Styled</i> Text</demo></b> demo!`
 * where the style tags must be either one of the predefined tags: `<b>`, `<i>` or `<u>`
 * or refer to custom styles defined in the textStyles property, e.g. `<demo>`
 */
declare class StyledText extends React.PureComponent<Props> {}

export default StyledText;

import {
  scan,
  Token,
  TOKEN_BEGIN_TAG,
  TOKEN_END_TAG,
  TOKEN_TEXT,
} from './lexicalAnalyzer';

// Syntax:
// beginStyle ::= <style-name>
// endStyle   ::= </style-name> | </>
// plainText  ::= .*
// styledText ::= beginStyle mixedText [endStyle]
// mixedText  ::= (plainText | styledText)*

export type Styled = {
  styleName: string,
  mixedText: Mixed,
};

export type Mixed = Array<Styled | string>

const parseStyledText = (tokens: Array<Token>, startIndex: number)
  : { styledText: Styled, length: number } => {
  const styleName = tokens[startIndex].lexeme;
  let index = startIndex + 1;
  const { mixedText, length } = parseMixedText(tokens, index);
  index += length;
  if (index < tokens.length && tokens[index].type === TOKEN_END_TAG) {
    // Check proper nesting of styles, if style name used on end tag
    if (tokens[index].lexeme && tokens[index].lexeme !== styleName) {
      console.warn('react-native-styled-text: style name mismatch <' + styleName + '>...</' + tokens[index].lexeme + '>');
    }
    index++;
  }

  return {
    styledText: {
      styleName,
      mixedText,
    },
    length: index - startIndex,
  };
};

const parseMixedText = (tokens: Array<Token>, startIndex: number)
  : { mixedText: Mixed, length: number } => {
  const mixedText = [];
  let index = startIndex;
  while (index < tokens.length && tokens[index].type !== TOKEN_END_TAG) {
    const token = tokens[index];
    switch (token.type) {
    case TOKEN_BEGIN_TAG: {
        const { styledText, length } = parseStyledText(tokens, index);
        mixedText.push(styledText);
        index += length;
        break;
      }
    case TOKEN_TEXT:
      mixedText.push(token.lexeme);
      index++;
      break;
    default: 
      console.warn('Unexpected ' + token.type + ': ' + token.lexeme);
      index++;
      break;
    }
  }

  return {
    mixedText,
    length: index - startIndex,
  };
};

export const parse = (text: string): Mixed => {
  const tokens = scan(text);
  const { mixedText, length } = parseMixedText(tokens, 0);
  
  if (length < tokens.length) {
    const unexpectedToken = tokens[length];
    console.warn('Unexpected ' + unexpectedToken.type + ': ' + unexpectedToken.lexeme);
  }

  return mixedText;
};

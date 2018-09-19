
export type Token = {
  type: string,
  lexeme: string,
}

export const TOKEN_BEGIN_TAG = 'beginTag';
export const TOKEN_END_TAG = 'endTag';
export const TOKEN_TEXT = 'text';

export const scan = (text: string): Array<Token> => {
  const tagRegex = /<([\w-]+)>|<\/([\w-]*)>/;
  const tokens = [];

  let remainingText = text;
  while (remainingText.length > 0) {
    const tag = tagRegex.exec(remainingText);

    if (!tag) {
      tokens.push({ type: TOKEN_TEXT, lexeme: remainingText });
      remainingText = '';
      break;
    }

    if (tag.index > 0) {
      const headText = remainingText.substring(0, tag.index);
      tokens.push({ type: TOKEN_TEXT, lexeme: headText });
      remainingText = remainingText.substring(tag.index);
    }

    const styleName = tag[1];
    if (tag[0].startsWith('</')) {
      tokens.push({ type: TOKEN_END_TAG, lexeme: styleName });
    } else {
      tokens.push({ type: TOKEN_BEGIN_TAG, lexeme: styleName });
    }

    remainingText = remainingText.substring(tag[0].length);
  }

  return tokens;
};

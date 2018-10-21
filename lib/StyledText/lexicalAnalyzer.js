export type Token = {
  type: string,
  lexeme: string,
}

export const TOKEN_BEGIN_TAG = 'begin tag';
export const TOKEN_END_TAG = 'end tag';
export const TOKEN_TEXT = 'text';

const replaceCodes = (text: string) => {
  return text
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
}

export const scan = (text: string): Array<Token> => {
  if (text === undefined || text === null || text === '') {
    return [{ type: TOKEN_TEXT, lexeme: text }];
  }

  const tagRegex = /<([\w-]+)>|<\/([\w-]*)>/;
  const tokens = [];

  let remainingText = text;
  while (remainingText.length > 0) {
    const tag = tagRegex.exec(remainingText);

    if (!tag) {
      const lexeme = replaceCodes(remainingText);
      tokens.push({ type: TOKEN_TEXT, lexeme });
      remainingText = '';
      break;
    }

    if (tag.index > 0) {
      const headText = remainingText.substring(0, tag.index);
      const lexeme = replaceCodes(headText);
      tokens.push({ type: TOKEN_TEXT, lexeme });
      remainingText = remainingText.substring(tag.index);
    }

    const styleName = tag[1] || tag[2];
    if (tag[0].startsWith('</')) {
      tokens.push({ type: TOKEN_END_TAG, lexeme: styleName });
    } else {
      tokens.push({ type: TOKEN_BEGIN_TAG, lexeme: styleName });
    }

    remainingText = remainingText.substring(tag[0].length);
  }

  return tokens;
};

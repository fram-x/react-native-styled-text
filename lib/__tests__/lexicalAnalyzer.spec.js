import {
  scan,
  Token,
  TOKEN_BEGIN_TAG,
  TOKEN_END_TAG,
  TOKEN_TEXT,
} from '../StyledText/lexicalAnalyzer';

describe('StyledText/lexicalAnalyzer', () => {
  describe('scan', () => {
    it('should return text if plain text', () => {
      const text = 'Testing <asdf adsf';
      const tokens = scan(text);
      expect(tokens.length).toBe(1);
      expect(tokens[0].type).toBe(TOKEN_TEXT);
      expect(tokens[0].lexeme).toBe(text);
    });

    it('should recognize start tag', () => {
      const text = '<style1>';
      const tokens = scan(text);
      expect(tokens.length).toBe(1);
      expect(tokens[0].type).toBe(TOKEN_BEGIN_TAG);
      expect(tokens[0].lexeme).toBe('style1');
    });

    it('should recognize named end tag', () => {
      const text = '</style1>';
      const tokens = scan(text);
      expect(tokens.length).toBe(1);
      expect(tokens[0].type).toBe(TOKEN_END_TAG);
      expect(tokens[0].lexeme).toBe('style1');
    });

    it('should recognize empty end tag', () => {
      const text = '</>';
      const tokens = scan(text);
      expect(tokens.length).toBe(1);
      expect(tokens[0].type).toBe(TOKEN_END_TAG);
      expect(tokens[0].lexeme).toBe('');
    });

    it('should handle mixed text', () => {
      const text = 'Testing <style1>adsf<style2>text2</style2>234';
      const tokens = scan(text);
      expect(tokens.length).toBe(7);
      expect(tokens[0].type).toBe(TOKEN_TEXT);
      expect(tokens[0].lexeme).toBe('Testing ');
      expect(tokens[1].type).toBe(TOKEN_BEGIN_TAG);
      expect(tokens[1].lexeme).toBe('style1');
      expect(tokens[2].type).toBe(TOKEN_TEXT);
      expect(tokens[2].lexeme).toBe('adsf');
      expect(tokens[3].type).toBe(TOKEN_BEGIN_TAG);
      expect(tokens[3].lexeme).toBe('style2');
      expect(tokens[4].type).toBe(TOKEN_TEXT);
      expect(tokens[4].lexeme).toBe('text2');
      expect(tokens[5].type).toBe(TOKEN_END_TAG);
      expect(tokens[5].lexeme).toBe('style2');
      expect(tokens[6].type).toBe(TOKEN_TEXT);
      expect(tokens[6].lexeme).toBe('234');
    });

    it('should translate &gt; &lt; &quot;', () => {
      const text = '<style1>&lt;&quot;&gt;';
      const tokens = scan(text);
      expect(tokens.length).toBe(2);
      expect(tokens[0].type).toBe(TOKEN_BEGIN_TAG);
      expect(tokens[0].lexeme).toBe('style1');
      expect(tokens[1].type).toBe(TOKEN_TEXT);
      expect(tokens[1].lexeme).toBe('<">');
    });
  });
});

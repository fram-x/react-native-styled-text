import { parse } from '../StyledText/parser';

describe('components/FormattedText/parser', () => {
  describe('parseText', () => {
    it('should return text if not formatted', () => {
      const text = 'Testing <asdf adsf';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(1);
      expect(mixedText[0]).toBe(text);
    });

    it('should handle text if enclosed in tags', () => {
      const text = '<style1>Testing adsf</>';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(1);
      expect(mixedText[0].styleName).toBe('style1');
      expect(mixedText[0].mixedText.length).toBe(1);
      expect(mixedText[0].mixedText[0]).toBe('Testing adsf');
    });

    it('should handle mixed text', () => {
      const text = 'Testing <style1>adsf</>234';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(3);
      expect(mixedText[0]).toBe('Testing ');
      expect(mixedText[1].styleName).toBe('style1');
      expect(mixedText[1].mixedText.length).toBe(1);
      expect(mixedText[1].mixedText[0]).toBe('adsf');
      expect(mixedText[2]).toBe('234');
    });

    it('should handle nested mixed text', () => {
      const text = 'Testing <style1>adsf<style2>text2</></>234';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(3);
      expect(mixedText[0]).toBe('Testing ');
      expect(mixedText[1].styleName).toBe('style1');
      expect(mixedText[1].mixedText.length).toBe(2);
      expect(mixedText[1].mixedText[0]).toBe('adsf');
      expect(mixedText[1].mixedText[1].styleName).toBe('style2');
      expect(mixedText[1].mixedText[1].mixedText.length).toBe(1);
      expect(mixedText[1].mixedText[1].mixedText[0]).toBe('text2');
      expect(mixedText[2]).toBe('234');
    });

    it('should handle missing end tags', () => {
      const text = 'Testing <style1>adsf<style2>text2</>234';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(2);
      expect(mixedText[0]).toBe('Testing ');
      expect(mixedText[1].styleName).toBe('style1');
      expect(mixedText[1].mixedText.length).toBe(3);
      expect(mixedText[1].mixedText[0]).toBe('adsf');
      expect(mixedText[1].mixedText[1].styleName).toBe('style2');
      expect(mixedText[1].mixedText[1].mixedText.length).toBe(1);
      expect(mixedText[1].mixedText[1].mixedText[0]).toBe('text2');
      expect(mixedText[1].mixedText[2]).toBe('234');
    });

    it('should handle named end tags', () => {
      const text = 'Testing <style1>adsf<style2>text2</style2>234';
      const mixedText = parse(text);
      expect(mixedText.length).toBe(2);
      expect(mixedText[0]).toBe('Testing ');
      expect(mixedText[1].styleName).toBe('style1');
      expect(mixedText[1].mixedText.length).toBe(3);
      expect(mixedText[1].mixedText[0]).toBe('adsf');
      expect(mixedText[1].mixedText[1].styleName).toBe('style2');
      expect(mixedText[1].mixedText[1].mixedText.length).toBe(1);
      expect(mixedText[1].mixedText[1].mixedText[0]).toBe('text2');
      expect(mixedText[1].mixedText[2]).toBe('234');
    });
  });
});

import { verifyChildrenProp, verifyTextStylesProp, verifyTextStyles } from '../StyledText/utils';

let warnings = [];
const warn = msg => warnings.push(msg);
const textStyles = { 
  style1: {},
  style2: {},
};
const defaultStyles = {
  b: {},
  i: {},
  u: {}
};

describe('StyledText/utils', () => {
  beforeAll(() => {
    console['warn'] = warn;
  });
  beforeEach(() => {
    warnings = [];
  });

  describe('verifyChildrenProp', () => {
    it('should not give warning on children undefined', () => {
      const children = undefined;
      verifyChildrenProp(children);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on children null', () => {
      const children = null;
      verifyChildrenProp(children);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on children ""', () => {
      const children = "";
      verifyChildrenProp(children);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on children "test"', () => {
      const children = "test";
      verifyChildrenProp(children);
      expect(warnings.length).toBe(0);
    });

    it('should give warning on children object', () => {
      const children = {};
      verifyChildrenProp(children);
      expect(warnings.length).toBe(1);
    });

    it('should not give warning on textStyles undefined', () => {
      const textStyles = undefined;
      verifyTextStylesProp(textStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on textStyles null', () => {
      const textStyles = null;
      verifyTextStylesProp(textStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on textStyles {}', () => {
      const textStyles = {};
      verifyTextStylesProp(textStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on textStyles { test: {}}', () => {
      const textStyles = { test: {}};
      verifyTextStylesProp(textStyles);
      expect(warnings.length).toBe(0);
    });

    it('should give warning on textStyles string', () => {
      const textStyles = "test";
      verifyTextStylesProp(textStyles);
      expect(warnings.length).toBe(1);
    });
  });  

  describe('verifyTextStyles', () => {
    it('should not give warning on undefined', () => {
      const mixedText = [undefined];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on null', () => {
      const mixedText = [null];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on ""', () => {
      const mixedText = [''];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on "test"', () => {
      const mixedText = ['test'];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on defined styles', () => {
      const mixedText = [
        'test', 
        { 
          styleName: 'style1', 
          mixedText: [
            'test2', 
            { 
              styleName: 'b', 
              mixedText: ['test3']
            }
          ]
        }
      ];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(0);
    });

    it('should not give warning on undefined styles', () => {
      const mixedText = [
        'test', 
        { 
          styleName: 'style3', 
          mixedText: [
            'test2', 
            { 
              styleName: 'e', 
              mixedText: ['test3']
            }
          ]
        }
      ];
      verifyTextStyles(mixedText, textStyles, defaultStyles);
      expect(warnings.length).toBe(2);
      expect(warnings[0]).toContain('"style3"');
      expect(warnings[1]).toContain('"e"');
    });
  });
});

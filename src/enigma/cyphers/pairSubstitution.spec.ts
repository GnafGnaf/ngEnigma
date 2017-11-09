import {PairSubstitution} from "./pairSubstitution";

describe('PairSubstitution', () => {
  let pairSubstitution: PairSubstitution;

  beforeEach(() => {
    pairSubstitution = new PairSubstitution('XA', 'ZM');
  });

  describe('encoding', () => {
    it('Substitutes by pairs', () => {
      expect(pairSubstitution.encode('X')).toEqual('A');
    });

    it('returns plaintext for undefined pairs', () => {
      expect(pairSubstitution.encode('U')).toEqual('U');
    });

    it('substitutes characterwise', () => {
      expect(pairSubstitution.encode('XU')).toEqual('AU');
    });
  });

  describe('decoding', () => {
    it('Substitutes by pairs', () => {
      expect(pairSubstitution.decode('A')).toEqual('X');
    });

    it('returns plaintext for undefined pairs', () => {
      expect(pairSubstitution.decode('U')).toEqual('U');
    });

    it('substitutes character wise', () => {
      expect(pairSubstitution.decode('AU')).toEqual('XU');
    });
  });
});

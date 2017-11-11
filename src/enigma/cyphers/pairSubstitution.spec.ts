import {PairSubstitution} from "./pairSubstitution";

describe('PairSubstitution', () => {
  let pairSubstitution: PairSubstitution;

  beforeEach(() => {
    pairSubstitution = new PairSubstitution('XA', 'ZM');
  });

  it('substitutes characters', () => {
    expect(pairSubstitution.substitute('x')).toEqual('A');
    expect(pairSubstitution.substitute('A')).toEqual('X');

    expect(pairSubstitution.substitute('L')).toEqual('L');

    expect(pairSubstitution.substitute('XM')).toEqual('AZ');
  });
});

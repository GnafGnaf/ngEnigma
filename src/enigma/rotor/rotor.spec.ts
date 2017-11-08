import {Rotor} from "./rotor";
import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {ALPHABET} from "../constants";
import {OverflowObserver} from "./OverflowObserver";

describe('Rotor', () => {
  let rotor: Rotor;
  beforeEach(() => {
    rotor = new Rotor(new SimpleSubstitution('BCDEFGHIJKLMNOPQRSTUVWXYZA'));
  });

  describe('Encryption', () => {
    it('outputs an encrypted version of the input character', () => {
      expect(rotor.encode('A')).toEqual('B');
    });

    it('can rotate', () => {
      expect(rotor.encode('A')).toEqual('B');
      rotor.rotate();
      expect(rotor.encode('A')).toEqual('C');
    });
  });

  describe('decode', () => {
    it('outputs a decrypted version of the input character', () => {
      expect(rotor.decode('B')).toEqual('A');
    });

    it('can rotate', () => {
      expect(rotor.decode('B')).toEqual('A');
      rotor.rotate();
      expect(rotor.decode('C')).toEqual('A');
    });
  });

  it('informs about overflows', () => {
    let observer = <OverflowObserver>{onOverflow: function(){}};
    spyOn(observer, 'onOverflow');

    rotor.informAboutOverflow(observer);
    for (let character of ALPHABET) {
      expect(observer.onOverflow).not.toHaveBeenCalled();
      rotor.rotate();
    }
    expect(observer.onOverflow).toHaveBeenCalled();
  });

  it('rotates if it is informed about an overflow by an observed object', () => {
    rotor.onOverflow();
    expect(rotor.encode('A')).toEqual('C')
  });
});

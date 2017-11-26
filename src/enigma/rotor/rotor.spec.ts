import {Rotor} from "./rotor";
import {SimpleSubstitution} from "../cyphers/simpleSubstitution";
import {ALPHABET} from "../constants";
import {OverflowObserver} from "./OverflowObserver";
import {PresentableRotor} from "./presentableRotor";
import {RotorStateObserver} from "../../app/rotor/rotorStateObserver";

describe('Rotor', () => {
  let rotor: Rotor;
  beforeEach(() => {
    rotor = new Rotor('BCDEFGHIJKLMNOPQRSTUVWXYZA');
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
    let nextRotor = <Rotor>{rotate: function(){}};
    spyOn(nextRotor, 'rotate');
    rotor.nextRotor = nextRotor;

    for (let character of ALPHABET) {
      expect(nextRotor.rotate).not.toHaveBeenCalled();
      rotor.rotate();
    }
    expect(nextRotor.rotate).toHaveBeenCalled();
  });

  it('informs about underflows', () => {
    let nextRotor = <Rotor>{rotateBackwards: function(){}};
    spyOn(nextRotor, 'rotateBackwards');
    rotor.nextRotor = nextRotor;

    rotor.rotate();
    rotor.rotateBackwards();
    expect(nextRotor.rotateBackwards).not.toHaveBeenCalled();
    rotor.rotateBackwards();
    expect(nextRotor.rotateBackwards).toHaveBeenCalled();
  });

  it('test over and underflow', () => {
    let nextRotor = <Rotor>{rotateBackwards: function(){}, rotate: function (){}};
    spyOn(nextRotor, 'rotateBackwards');
    spyOn(nextRotor, 'rotate');
    rotor.nextRotor = nextRotor;

    expect(nextRotor.rotate).not.toHaveBeenCalled();
    expect(nextRotor.rotateBackwards).not.toHaveBeenCalled();

    rotor.rotateBackwards();
    expect(nextRotor.rotate).not.toHaveBeenCalled();
    expect(nextRotor.rotateBackwards).toHaveBeenCalled();

    rotor.rotate();
    expect(nextRotor.rotate).toHaveBeenCalled();
    expect(nextRotor.rotateBackwards).toHaveBeenCalled();
  });

  it('notifies Observers about rotation', () => {
    let observer: RotorStateObserver = {
      onRotorStateChange: function (newState) {}
    };
    spyOn(observer, 'onRotorStateChange');

    rotor.registerStateChangeObserver(observer);
    rotor.rotate();

    expect(observer.onRotorStateChange).toHaveBeenCalledWith('B');
  });
});

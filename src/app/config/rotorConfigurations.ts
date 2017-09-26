// Source: https://en.wikipedia.org/wiki/Enigma_rotor_details#Rotor_wiring_tables

export class RotorConfiguration {
  rotorNumber: string;
  yearIntroduced: number;
  enigmaModel: string;
  substitution: string;

}

export const ROTOR_CONFIGURATIONS: RotorConfiguration[] = [
    {
      rotorNumber: 'IC',
      yearIntroduced: 1924,
      enigmaModel: 'Commercial Enigma A, B',
      substitution: 'DMTWSILRUYQNKFEJCAZBPGXOHV'
    },{
      rotorNumber: 'IIC',
      yearIntroduced: 1924,
      enigmaModel: 'Commercial Enigma A, B',
      substitution: 'HQZGPJTMOBLNCIFDYAWVEUSRKX'
    },{
      rotorNumber: 'IIIC',
      yearIntroduced: 1924,
      enigmaModel: 'Commercial Enigma A, B',
      substitution: 'UQNTLSZFMREHDPXKIBVYGJCWOA'
    }
  ];

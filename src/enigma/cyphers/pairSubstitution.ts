import {Cypher} from "./cypher";

export class PairSubstitution implements Cypher{
  private substitutionPairs: string[];

  constructor(... substitutionPairs: string[]) {
    this.substitutionPairs = substitutionPairs;
  }

  encode(plaintext: string): string {
    let cypherText = "";

    for (let character of plaintext.toUpperCase()) {
      let substitution = this.substitutionPairs.filter((pair) => {
        return pair.charAt(0) == character
      }, character)[0];

      cypherText += substitution ? substitution.charAt(1) : character;
    }

    return cypherText;
  }

  decode(cypherText: string): string {
    let plainText = "";

    for (let character of cypherText.toUpperCase()) {
      let substitution = this.substitutionPairs.filter((pair) => {
        return pair.charAt(1) == character
      }, character)[0];

      plainText += substitution ? substitution.charAt(0) : character;
    }

    return plainText;
  }
}

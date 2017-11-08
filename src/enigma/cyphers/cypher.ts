export interface Cypher {
  encode(plaintext: string) : string;
  decode(cypherText: string) : string;
}

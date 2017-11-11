export class PairSubstitution {
  private substitutionPairs: string[];

  constructor(... substitutionPairs: string[]) {
    this.substitutionPairs = substitutionPairs;
  }

  substitute(inputText: string) {
    let outputText = '';

    for (let character of inputText.toUpperCase()) {
      let substitution = this.substitutionPairs.filter((pair) => {
        return pair.includes(character)
      }, character)[0];
      outputText += substitution ? substitution.replace(character, '') : character;
    }

    return outputText;
  }
}

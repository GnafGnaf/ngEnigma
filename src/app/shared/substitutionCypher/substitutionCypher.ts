import {InvalidArgumentError} from "../errors/invalidArgumentError";

export class SubstitutionCypher {

  public constructor(private substitutions: Map<string, string>) {}

  public substitute(toSubstitute: string) {
    if (!this.substitutions.has(toSubstitute)) {
      throw new InvalidArgumentError(toSubstitute + ' could not be substituted')
    }
    return this.substitutions.get(toSubstitute);
  }
}

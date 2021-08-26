export class ExtendedString extends String {

  private currentValue!: string | undefined;

  constructor (currentValue?: string) {
    super();
    this.currentValue = currentValue;
  }

  public surroundWith (usingString: string): string {
    return ExtendedString.surroundText(this.currentValue ?? '', usingString);
  }

  public static surroundText (contentToBeSurrounded: string, surrounder: string): string {
    return surrounder + contentToBeSurrounded + surrounder;
  }
}

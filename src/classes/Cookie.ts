export default class Cookie {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public getColor() {
    return this.color;
  }

  public setColor(color: string) {
    return this.color = color;
  }
}
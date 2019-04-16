export class Book {
  public id: any;
  public name: string;
  public details: string;
  public price: any;
  public image: any;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

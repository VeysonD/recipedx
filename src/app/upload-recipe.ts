export class Upload {
  constructor(
    public user: string,
    public title: string,
    public Photos: any,
    public isStarred: boolean,
    public Tags: Array<string>,
  ) { }
}

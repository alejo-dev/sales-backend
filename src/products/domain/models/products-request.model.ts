export class ProductsRequest {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ) {}
}

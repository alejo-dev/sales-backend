export class ProductsResponse {
  constructor(
    public readonly id,
    public readonly name: string,
    public readonly description: string,
    public readonly price: number
  ) {}
}

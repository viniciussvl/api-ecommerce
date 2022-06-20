export default interface UpdateProductDto {
    name: string,
    description: string,
    price: Number,
    imageUrl?: string,
    status: boolean,
}
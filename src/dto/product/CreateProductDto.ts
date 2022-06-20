export interface CreateProductDto {
    name: string,
    description: string,
    price: Number,
    imageUrl?: string,
    status: boolean
}
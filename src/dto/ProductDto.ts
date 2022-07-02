export default interface ProductDto {
  name: string;
  slug: string;
  description: string;
  price: Number;
  imageUrl?: string;
  status: boolean;
  categoryId: string;
  userId: string;
}

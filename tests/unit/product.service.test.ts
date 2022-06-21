import productService from '../../src/business/ProductService';

describe('ProductService Class', () => {
    describe('Get active products', () => {
        test('should return a list of products', async () => {
            const products = await productService.getActiveProducts();
            expect(products).toMatchObject(products)
            
        })
    })
});
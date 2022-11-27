import Product from "./product"


describe('Product unit tests', () => {

  it('should throw error when id is empty', () => {
   expect(() => {

    const product = new Product('', 'product 1', 100)

   }).toThrowError('Id is required')
  })

  it('should throw error when name is empty', () => {
   expect(() => {

    const product = new Product('123', '', 100)

   }).toThrowError('Name is required')
  })
  
  it('should throw error when price is less than zero', () => {
   expect(() => {

    const product = new Product('123', 'product 1', -1)

   }).toThrowError('Price must be greater than zero')
  })

  it('should change name', () => {
   const product = new Product('123', 'product1', 100)
   product.changeName('product 2')

   expect(product.name).toBe('product 2')
  })
 
  it('should change price', () => {
   const product = new Product('123', 'product1', 100)
   product.changePrice(200)

   expect(product.price).toBe(200)
  })
})
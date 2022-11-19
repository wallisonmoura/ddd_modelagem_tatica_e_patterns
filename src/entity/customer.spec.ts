import Address from "./address"
import Customer from "./customer"

describe('Customer unit tests', () => {

  it('should throw error when id is empty', () => {
    expect(() => {
      let customer = new Customer('', 'wallison')
    }).toThrowError("Id is required")
  })

  it('should throw error when name is empty', () => {
    expect(() => {
      let customer = new Customer('123', '')
    }).toThrowError("Name is required")
  })

  it('should change name', () => {
    const customer = new Customer('123', 'wallison')
    customer.changeName('Wallison Moura')
   
    expect(customer.name).toBe('Wallison Moura')
  })

  it('should activate customer', () => {
    const customer = new Customer('123', 'Customer 1')
    const address = new Address('street 1', 123, '12345-987', 'Recife')
    customer.Address = address

    customer.activate()
   
    expect(customer.isActive()).toBe(true)
  })

  it('should throw error when address is undefined when you activate a customer', () => {

    expect(() => {
      const customer = new Customer('123', 'Customer 1')
      customer.activate()
    }).toThrowError("Address is mandatory to activate a customer")
  })

  it('should deactivate customer', () => {
    const customer = new Customer('123', 'Customer 1')

    customer.deactivate()
   
    expect(customer.isActive()).toBe(false)
  })
})
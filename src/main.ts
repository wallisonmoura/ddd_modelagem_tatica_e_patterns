import Address from "./entity/address";
import Customer from "./entity/customer";
import Order from "./entity/order";
import OrderItem from "./entity/order_item";

let customer = new Customer('123', 'wallison moura')
const address = new Address('rua um', 10, '12345-678', 'Recife')
customer.Address = address
customer.activate()

const item1 = new OrderItem('1', 'item1', 10, '123', 1)
const item2 = new OrderItem('2', 'item2', 15, '12', 2)

const order = new Order('1', '123', [item1, item2])
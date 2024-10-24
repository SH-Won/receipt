import { ChangeEvent, useMemo, useState } from 'react'
import Header from './Header'
import OrderTable from './OrderTable'
const defaultOrder = { key: 0, itemName: '', quantity: 0, unitPrice: 0, price: 0 }

const App = () => {
  const [orders, setOrders] = useState(
    Array(12)
      .fill(0)
      .map((_, index) => ({ ...defaultOrder, key: index }))
  )

  const addOrder = () => {
    setOrders((prev) => [...prev, { ...defaultOrder, key: prev.length }])
  }
  const deleteOrder = (key: number) => {
    const copyOrder = [...orders.slice(0, key), ...orders.slice(key + 1)].map((item, index) => ({
      ...item,
      key: index,
    }))
    setOrders(copyOrder)
  }
  const onFocusOut = (order: typeof defaultOrder) => {
    const key = order.key
    const copyOrders = [...orders]
    const { itemName, quantity, unitPrice } = copyOrders[key]
    if (itemName && quantity && unitPrice) {
      copyOrders[key].price = quantity * unitPrice
    }
    setOrders(copyOrders)
  }
  const resetOrder = (key: number) => {
    const copyOrders = [...orders]
    copyOrders[key] = { ...defaultOrder }
    setOrders(copyOrders)
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>, key: number) => {
    let { name, value } = e.target
    let newValue
    if (name === 'quantity' || name === 'unitPrice') {
      newValue = parseInt(value) || 0
    } else {
      newValue = value
    }
    if ((name === 'quantity' || name === 'unitPrice') && typeof newValue !== 'number') {
      return
    }

    const copyOrders = [...orders]
    copyOrders[key] = {
      ...copyOrders[key],
      [name]: newValue,
    }
    setOrders(copyOrders)
  }
  const calcOrders = useMemo(() => {
    return orders
  }, [orders])
  const totalPrice = useMemo(() => {
    return orders.reduce((acc, cur) => (acc += cur.price), 0)
  }, [orders])
  return (
    <div className="container">
      <Header totalPrice={totalPrice} />
      <OrderTable
        orders={calcOrders}
        totalPrice={totalPrice}
        addOrder={addOrder}
        deleteOrder={deleteOrder}
        handleFocusOut={onFocusOut}
        handleChange={handleChange}
        resetOrder={resetOrder}
      />
    </div>
  )
}

export default App

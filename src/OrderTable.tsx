import React, { ChangeEvent, useState } from 'react'
type TOrder = {
  key: number
  itemName: string
  quantity: number
  unitPrice: number
  price: number
}
interface IOrderTable {
  addOrder: () => void
  deleteOrder: (key: number) => void
  handleFocusOut: (order: TOrder) => void
  handleChange: (e: ChangeEvent<HTMLInputElement>, key: number) => void
  resetOrder: (key: number) => void
  orders: TOrder[]
  totalPrice: number
}
const OrderTable = ({
  addOrder,
  deleteOrder,
  handleFocusOut,
  handleChange,
  resetOrder,
  orders,
  totalPrice,
}: IOrderTable) => {
  const [showAddButton, setShowAddButton] = useState(false)
  const [showDeleteButton, setShowDeleteButton] = useState<number>()
  const handleEnter = () => {
    setShowAddButton(true)
  }
  const handleLeave = () => {
    setShowAddButton(false)
  }
  const handleDeleteEnter = (key: number) => {
    setShowDeleteButton(key)
  }
  const handleDeleteLeave = (key: number) => {
    setShowDeleteButton(Infinity)
  }
  return (
    <div>
      <table className="order__table">
        <colgroup>
          <col width="10%" />
          <col width="35%" />
          <col width="12.5%" />
          <col width="12.5%" />
          <col width="30%" />
        </colgroup>
        <thead>
          <th scope="col">월일</th>
          <th scope="col">품목</th>
          <th scope="col">수량</th>
          <th scope="col">단가</th>
          <th scope="col">금액</th>
        </thead>
        <tbody>
          {orders.map((item) => {
            return (
              <tr
                key={item.key}
                onMouseEnter={() => handleDeleteEnter(item.key)}
                onMouseLeave={() => handleDeleteLeave(item.key)}
              >
                <td></td>
                <td>
                  <input
                    name="itemName"
                    value={item.itemName}
                    onChange={(e) => handleChange(e, item.key)}
                    onBlur={() => handleFocusOut(item)}
                  />
                </td>
                <td>
                  <input
                    name="quantity"
                    value={item.quantity}
                    onChange={(e) => handleChange(e, item.key)}
                    onBlur={() => handleFocusOut(item)}
                  />
                </td>
                <td>
                  <input
                    name="unitPrice"
                    value={item.unitPrice}
                    onChange={(e) => handleChange(e, item.key)}
                    onBlur={() => handleFocusOut(item)}
                  />
                </td>
                <td className="delete-cell">
                  <input
                    name="price"
                    value={item.price}
                    onChange={(e) => handleChange(e, item.key)}
                    onBlur={() => handleFocusOut(item)}
                  />

                  {showDeleteButton === item.key ? (
                    <div className="controller">
                      <span className="reset__button" onClick={() => resetOrder(item.key)}>
                        R
                      </span>
                      <span className="delete__button" onClick={() => deleteOrder(item.key)}>
                        -
                      </span>
                    </div>
                  ) : null}
                </td>
              </tr>
            )
          })}
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td style={{ fontSize: '14px' }}>₩</td>
            <td style={{ fontSize: '14px' }}>{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <div
        className="add__button"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        onClick={addOrder}
      >
        {showAddButton ? <span>+</span> : null}
      </div>
    </div>
  )
}

export default OrderTable

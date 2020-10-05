import React from 'react'

const CartTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Tu pedido</th>
        <th>Unidades</th>
      </tr>
    </thead>
    <tbody>
      {props.cart.length > 0 ? (
        props.cart.map((item) => ( 
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.units}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>El carrito está vacío</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default CartTable
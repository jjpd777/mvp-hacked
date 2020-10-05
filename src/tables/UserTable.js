import React from 'react'

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Promoción</th>
        <th>Precio</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.price}</td>
            <td>{user.username}</td>
            <td>
              <button 
                onClick={() => props.deleteItem(user.id)}
                className="button muted-button">
                    -
              </button>
              <button
                onClick={() => props.addItem(user.id)}
                className="button muted-button">
                    +
            </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>Shopping cart is empty</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
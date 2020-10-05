import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import CartTable from './tables/CartTable'
import AddUserForm from './forms/AddUser'
import EditUserForm from './forms/EditUserForm'


const App = () => {
  const usersData = [
    { id: 1, name: 'Combo el chinito', price:200, username: '3 tacos de polllo y toda la vuelta',units:0 },
    { id: 2, name: 'Wantanes', price:200, username: '5 wantans de camarón o pollo',units:0 },
    { id: 3, name: 'Chau-mein', price:200, username: 'de res o cerdo para 2 personas',units:0 },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [total, setTotal] = useState(0)
  const [users, setUsers] = useState(usersData)

  const addItem = (id)=>{
    const user2update = users.filter((user) => user.id === id)[0]
    user2update.units++
    setUsers(users.map((user) => (user.id === id ? user2update : user)))
  }
  const deleteItem = (id)=>{
    const user2update = users.filter((user) => user.id === id)[0]
    if(user2update.units>0){ user2update.units--}
    setUsers(users.map((user) => (user.id === id ? user2update : user)))
  }
  const builtCart = users.filter(element => element.units>0);

  return (
    <div className="container">
      <div className="flex-row">
      <img src={require("./static/logochinito.jpg")} class="img-fluid" alt="Responsive image"/>        
        <div className="flex-large">
          <h2>Menú completo</h2>
        <UserTable users={users} addItem={addItem} deleteItem={deleteItem} />
        </div>
        <CartTable  cart={builtCart}/>
      </div>
    </div>
  )
}

export default App
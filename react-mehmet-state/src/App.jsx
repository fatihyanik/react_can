import { useState } from 'react'
import './App.css'

function App() {

  const [name, setName] = useState("Mehmet");
  const [age, setAge] = useState(32);
  const [friends, setFriends] = useState(["Ahmet", "Murat"]);
  const [address, setAddress] = useState({address:"Istanbul", zip: 42209});


  return (
    <div className="App">
      <h1>Merhaba {name}!</h1>
      <h2>{age}</h2>
      <button onClick={() => setName("Ahmet")} >Change Name</button>
      <button onClick={() => setAge(38)} >Change Age</button>

      <hr />
      <br />

      <h2>Friends</h2>
      {
        friends.map((friend, index) => {
          return <div key={index}>{friend}</div>
        })
      }

      <button onClick={() => setFriends([...friends, "Ayse"])} >Add new friend</button>

      <hr />
      <br />

      <h2>Address</h2>
      <div>
        {address.address} {address.zip}
      </div>
      <button onClick={() => setAddress({...address, zip:44444, address:"Leipzig"})} >Change the address</button>

    </div>
  )
}

export default App

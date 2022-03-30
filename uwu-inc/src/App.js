import './App.css';
import UserForm from "./components/UserForm"
import User from "./components/User"

import React, { useState, useEffect } from "react"
import axios from "axios"

function App() {

  const intialFormValues = {
    fname: "",
    lname: "", 
    email: "",
    password: "",
    confirm: "",
    terms: false
  }
  const [ formValues, setFormValues ] = useState(intialFormValues);

  const initialUsers = [];
  const [ users, setUsers ] = useState(initialUsers)

  const getUsers = () => {
    axios.get("https://reqres.in/api/users")
      .then( res => setUsers(res.data.data) )
      .catch( err => console.error(err) )
  }

  useEffect( () => {
    getUsers()
  }, [])


  return (
    <div className="uwu-inc">
      <div className="header">
        <h1>uwu inc</h1>
      </div>
      <UserForm/>
      {/* {
        users.map( user => {
          return <User key={ user.id } details={ user }/>
        })
      } */}
    </div>
  )
}

export default App;

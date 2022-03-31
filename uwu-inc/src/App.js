import './App.css';
import UserForm from "./components/UserForm"
import User from "./components/User"

import React, { useState, useEffect } from "react"
import axios from "axios"
import * as yup from "yup"
import schema from "./validation/userFormSchema"

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

  // ...........................................          Handle Errors       ........................................................
  const initialErrors = {
    fname: "",
    lname: "", 
    email: "",
    password: "",
    confirm: "",
    terms: ""
  }

  const [ formErrors, setFormErrors ] = useState(initialErrors);
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
        .then( () => setFormErrors( { ...formErrors, [name]: "" } ) )
        .catch( err => setFormErrors( { ...formErrors, [name]: err.errors[0] } ) )
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const getUsers = () => {
    axios.get("https://reqres.in/api/users")
      .then( res => setUsers(res.data.data) )
      .catch( err => console.error(err) )
  }

  const postNewUser = newUser => {
    axios.post("https://reqres.in/api/users", newUser)
      .then( res => console.log(res) )
      .catch( err => console.error(err) )
      .finally( () => setFormValues(intialFormValues) )
  }

  const submitForm = () => {
    const newUser = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      confirm: formValues.confirm.trim(),
      terms: formValues.terms
    }
    postNewUser(newUser);
  }

  useEffect( () => {
    getUsers()
  }, [])

  


  return (
    <div className="uwu-inc">
      <div className="header">
        <h1>uwu inc</h1>
      </div>
      <UserForm
        values= { formValues }
        change={ inputChange }
        submit= { submitForm }
        errors = { formErrors } 
        />
      {/* {
        users.map( user => {
          return <User key={ user.id } details={ user }/>
        })
      } */}
    </div>
  )
}

export default App;

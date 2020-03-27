import React, { useState } from 'react';
import axios from 'axios'
import { useHistory, Link } from 'react-router-dom'

const Register = () => {
  const history = useHistory()
  const [user, setUser] = useState({
    username: '',
    password: ''
  })

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/auth/register', user)
      .then(res => {
        console.log(res)
        history.push('/login')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type='text' name='username' value={user.username} placeholder='username' />
        <input onChange={handleChange} type='password' name='password' value={user.password} placeholder='password' />
        <button type='submit'>Register</button>
      </form><br />
      <Link to='/'><button>Back</button></Link>
    </div>
  );
}

export default Register;
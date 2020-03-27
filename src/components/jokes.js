import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const Jokes = () => {
  const logout = () => {
    window.localStorage.removeItem('token')
  }
  const [jokes, setJokes] = useState()

  useEffect(() => {
    axiosWithAuth()
      .get(`/api/jokes`)
      .then(res => {
        console.log(res)
        setJokes(res.data)
      })
  }, [])
  return (
    <div>
      <div>
        {jokes ? jokes.map(joke => (
          <div key={joke.id}>
            <h4>{joke.joke}</h4>
          </div>
        )) : ''}
      </div><br />
      <Link to='/'><button onCLick={logout}>Logout</button></Link>
    </div>
  );
}

export default Jokes;
import React from 'react'

const Person = ({ person, remove }) => {
  return (
    <li>{person.name} {person.number} <button onClick={remove}>poista</button></li>
  )
}

export default Person
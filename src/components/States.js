import React from 'react'

const States = (props) => {
  return (
    <div className="bg-warning">
      <h1>state: {props.name}</h1>
      <h1>population: {props.population}</h1>
    </div>
  )
}
export default States
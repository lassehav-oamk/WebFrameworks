import React from 'react'

export default function SearchResult(props) {
  return (
    <div style={ { padding: "30px" }}>
      <div><img src={`/images/${props.image}`} /></div>
      <div>{ props.name }</div>
      <div>{ props.price }</div>
    </div>
  )
}

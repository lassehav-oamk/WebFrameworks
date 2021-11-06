import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact(props) {
  return (
    <Link to={`/contacts/${props.data.id}`}>
      <div className="contact">
        {props.data.lastName} {props.data.firstName}
      </div>
    </Link>
  )
}
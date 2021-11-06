import React from 'react'
import { useParams } from 'react-router-dom';

export default function ContactDetailView(props) {
  const { contactId } = useParams();

  const contact = props.data.find(contact => contact.id === contactId);
  if(contact === undefined) {
    return <div>Not found</div>
  }

  return (
    <div>
        <h1>{ contact.lastName } { contact.firstName }</h1>
        <table>
          { Object.entries(contact).map(c => {
            return (
              <tr>
                <td>{c[0]}</td>
                <td>{c[1]}</td>
              </tr>
            )
          })}
        </table>
    </div>
  )
}

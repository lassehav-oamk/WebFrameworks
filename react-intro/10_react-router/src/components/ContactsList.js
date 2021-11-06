import React from 'react'
import ContactListElement from './ContactListElement';
import { Outlet } from 'react-router-dom';

export default function ContactsList(props) {
  return (
    <div>
      <div className="contactList">
        <div className="contactsView">
          { props.data.map(contact => <ContactListElement data={contact} />)}
        </div>
        <div className="contactView">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

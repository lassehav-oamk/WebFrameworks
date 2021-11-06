import React from 'react';
import  {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Home from './components/Home';
import Home2 from './components/Home2';
import ContactsList from './components/ContactsList';
import ContactDetailView from './components/ContactDetailView';
import contactsData from './data.json';
import './index.css'

const contacts = contactsData.map(contact => { return {...contact, id: uuidv4()}});

export default function App() {

  return (
    <>
      <BrowserRouter>
        <div className="menu">
          <div><Link to={"/"}>Home</Link></div>
          <div><Link to={"contacts"}>Contacts</Link></div>
        </div>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="home2" element={ <Home2 />} />
          <Route path="contacts" element={ <ContactsList data={ contacts } /> } >
            <Route path=":contactId" element={ <ContactDetailView data={ contacts }/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

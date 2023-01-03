// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import { createContext, useContext } from 'react';
import EventForm from './Components/EventForm';
import EventList from './Components/EventList';
// import EventDetails from './Components/EventDetails';

function App() {
  const [newEvent, setNewEvent]=useState()

  const [formData, setFormData]=useState([])
  return (
    <div className="App">
      <h1 className='header'>Events!</h1>
    <EventForm setFormData={setFormData} formData={formData} setNewEvent={setNewEvent} newEvent={newEvent}></EventForm>
    <EventList  formData={formData} setFormData={setFormData}></EventList>
    {/* <EventDetails></EventDetails> */}
    </div>
  );
}

export default App;

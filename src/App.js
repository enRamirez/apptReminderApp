import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios';
// import './App.css';
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
// import Login from './components/login';
// import MainPage from './components/mainPage';

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    name: '',
    describtion: '',
    date: new Date(),
    reminderTime: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAppointment({ ...appointment, [name]: date });
  };

  const handleDateChange = (date) => {
    setAppointment({ ...appointment, date: date });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // this is where the data is sent to the backend to process the reminder
    console.log(appointment);
    // Example POST request (adjust URL and data structure as needed)
    // axios.post('YOUR_BACKEND_ENDPOINT', appointment)
    //      .then(response => console.log(response.data))
    //      .catch(error => console.error('There was an error!', error));
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name of Appointment</label>
        <input
          type='text'
          name='name'
          value={appointment.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Date and Time:</label>
        <DatePicker
          selected={appointment.date}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat='Pp'
        />
      </div>
      <div>
        <label>Reminder Time (hours before):</label>
        <input
          type='number'
          name='reminderTime'
          value={appointment.reminderTime}
          onChange={handleInputChange}
        />
      </div>
      <button type='sumbit'>Sumbit</button>
    </form>
  )
}

export default AppointmentForm;









// return (
  //   <Router>
  //     <Routes>
  //       <Route path='/login' components={<Login />} />
  //       <Route path='/mainPage' components={<MainPage />} />
  //     </Routes>
  //   </Router>
  // );
import React, {useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css'
import axios from 'axios';
import './App.css';
// import { BrowserRouter as Route, Router, Routes } from 'react-router-dom';
// import Login from './components/login';
// import MainPage from './components/mainPage';

function AppointmentForm() {
  const [appointment, setAppointment] = useState({
    name: '',
    date: '',
    time: '',
    reminderTime: '',
    phoneNumber: '',
  });

  const [appointmentsList, setAppointmentsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    sendSMSReminder(appointment);

    setAppointmentsList([...appointmentsList, appointment]);
    
    setAppointment({
      name:'',
      date:'',
      time:'',
      reminderTime:'',
      phoneNumber:'',
    });

    console.log(appointment);
    alert('Appointment saved!');
    
  };

  const sendSMSReminder = (appointmentDetails) => {
    // ask keith about this one 
    // axios.post('http://YOUR_BACKEND_ENDPOINT/sendReminder'
    axios.post('http://localhost:3001/sendReminder', {
      to: appointmentDetails.phoneNumber,
      body: `Reminder: Your appointment for ${appointmentDetails.name} is coming up on ${appointmentDetails.date} at ${appointmentDetails.time}.`,
    })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error('Error sending SMS:', error.message);
    });
  };

  return (
    <div className="App">
      <h1 className='appHeader'>Appointment Reminder App</h1>
      <form onSubmit={handleSubmit} className='formsSection'>
        <div className='formsInputs'>
          <label>
            Appointment Name:
            <input
              type="text"
              name="name"
              value={appointment.name}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={appointment.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={appointment.time}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Reminder Time (hours before):
            <input
              type="number"
              name="reminderTime"
              value={appointment.reminderTime}
              onChange={handleChange}
              min="1"
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              value={appointment.phoneNumber}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="submit">Save Appointment</button>
      </form>
      <div className='listAppointment'>
        <h2 className='listHeader'>Appointments List</h2>
        <ul>
          {appointmentsList.map((appointment, index) => (
            <li key={index}>
              {`Name: ${appointment.name}`} <br />
              {`Date: ${appointment.date}`} <br />
              {`Time: ${appointment.time}`} <br />
              {`Reminder: ${appointment.reminderTime} hours before`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
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
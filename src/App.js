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
    description: '',
    date: '',
    reminderTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // this is where the data is sent to the backend to process the reminder
    console.log(appointment);
    // Example POST request (adjust URL and data structure as needed)
    // axios.post('YOUR_BACKEND_ENDPOINT', appointment)
    //      .then(response => console.log(response.data))
    //      .catch(error => console.error('There was an error!', error));
    alert('Appointment saved!');
  }

  return (
    <div className="App">
      <h1>Appointment Reminder App</h1>
      <form onSubmit={handleSubmit}>
        <div>
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
        <button type="submit">Save Appointment</button>
      </form>
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
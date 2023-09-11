import { useReducer } from "react";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../mockAPI";

//fetch API should be valid only for the semptember
function Reservation() {
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {
      case 'date':
          return { 
            ...state, 
            date: action.date, 
            availableTime: action.availableTime,
            currentTime: action.availableTime[0]
          }
      case 'time': 
          return { 
            ...state, 
            date: action.date, 
            availableTime: action.availableTime, 
            currentTime: action.time
          }
      default:
        return state;
    }
  }

  const [dateTime, dispatch] = useReducer(reducer, {
    date: '2023-09-10',
    availableTime: ['17', '18', '19', '20', '21'],
    currentTime: '17',
  });


  const handleDateChange = (newDate) => {
    fetchAPI(newDate).then((res) => {
      dispatch({ type: 'date', date: newDate, availableTime: res });
    });
  };

  const handleTimeChange = (newTime) => {
    dispatch({ type: 'time', date: dateTime.date, availableTime: dateTime.availableTime, time: newTime });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitAPI(dateTime.date, dateTime.currentTime).then((res) => {
      res ? alert('Form submitted successfully.') : alert('Form submission failed.')
      handleDateChange(dateTime.date);
    });
  }
  
    return (
      <BookingForm dateTime={dateTime} handleDateChange={handleDateChange} handleTimeChange={handleTimeChange} handleSubmit={handleSubmit}/>
    )
  }
  
  export default Reservation;
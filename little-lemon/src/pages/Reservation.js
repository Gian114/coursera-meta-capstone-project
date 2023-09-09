import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

function Reservation() {
  const cdate = new Date();

  let day = cdate.getDate();
  let month = cdate.getMonth() + 1;
  let year = cdate.getFullYear();
  let currentDate = `${day}/${month}/${year}`;


  function reducer(state, action) {
    switch (action.type) {
      case 'date':
        return { ...state, date: action.value };
      case 'time':
        return { ...state, time: action.value };
      default:
        return state;
    }
  }

  const [dateTime, dispatch] = useReducer(reducer, {
    date: currentDate,
    time: "17",
  });


  /*function inizializeTime() {
    return ['17', '18', '19', '20', '21'];
  }
  */
  
    return (
      <BookingForm dispatch={dispatch} dateTime={dateTime}/>
    )
  }
  
  export default Reservation;
import React, { useState } from 'react';

function BookingForm(props) {
    const [guests, setGuests] = useState('2');
    const [occasion, setOccasion] = useState('Birthday');

    //other fields are selected by choose that we give to user so validation is not needed but eventually should be added
    function validateForm(event) {
        event.preventDefault();
        if (guests >= 1 && guests <= 6) {
        props.handleSubmit(event);
        } else {        
        alert('Number of guests must be between 1 and 6.');
        }
    }
    
    return (  
        <form className="grid gap-5 max-w-52 mx-16 mt-8">
            <label className='block text-gray-700 text-sm font-bold mb-2'>Date:</label>
            <input type="date" aria-label='Date' value={props.dateTime.date} onChange={(e) => props.handleDateChange(e.target.value)} required 
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline' />
            <label className='block text-gray-700 text-sm font-bold mb-2'>Choose Time:</label>
            <select value={props.dateTime.currentTime} onChange={(event) => props.handleTimeChange(event.target.value)}
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                {props.dateTime.availableTime.map((time) => 
                    <option key={time} value={time}>{time}</option>
                )}
            </select>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Number of guests:</label>
            <input className='block appearance-none w-full bg-white border border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline invalid:border-red-500'
                type='number' defaultValue={guests} onChange={(e) => setGuests(e.target.value)} placeholder={guests} min='1' max='6' />
            <label className='block text-gray-700 text-sm font-bold mb-2'>Occasion:</label>
            <select value={occasion} onChange={(event) => setOccasion(event.target.value)}
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Wedding">Wedding</option>
            </select>
            <input className='bg-lemongreen hover:bg-green-700 text-white font-bold py-2 px-16 justify-center rounded focus:outline-none focus:shadow-outline' type="submit" value="Submit" 
            onClick={(e) => validateForm(e)} />
        </form>   
    )
}
  
  export default BookingForm;
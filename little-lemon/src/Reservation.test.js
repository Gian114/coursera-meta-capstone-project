import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

import Reservation from './pages/Reservation';


//se all the tests in coursera lessons
test('try test', () => {
    expect(true).toBe(true);
});

test("select hour", () => {
    // render the component on virtual dom
    render(<Reservation />);
    // find the element by its text 
    const hour = screen.getByText("17");
    expect(hour).toBeInTheDocument();
    //test update time
    fireEvent.change(hour, { target: { value: '18' } }); //tha api is working
    expect(hour).toHaveValue('18');
});

test("select event", () => {
    // render the component on virtual dom
    render(<Reservation />);
    // find the element by its text 
    const event = screen.getByText("Birthday");
    expect(event).toBeInTheDocument();
    fireEvent.change(event, { target: { value: 'Anniversary' } });
    expect(event).toHaveValue('Anniversary');
});

//test date API. OK 
test("select date", () => {
    // render the component on virtual dom
    render(<Reservation />);
    // find the element by its text 
    const date = screen.getByLabelText("Date");
    expect(date).toBeInTheDocument();
    expect(date).toHaveValue('2023-09-10');
    
    fireEvent.select(date, { target: { value: '2023-09-11' } });
    expect(date).toHaveValue('2023-09-11'); 
    
});

import { render, screen, cleanup } from '@testing-library/react';
import Reservation from './pages/Reservation';

test('try test', () => {
    expect(true).toBe(true);
});

test('renders Reservation component', () => {
    render(<Reservation />);
    //const linkElement = screen.getByText(/Date:/i);
    expect(linkElement).toBeInTheDocument();
});
import renderer from 'react-test-renderer';
import Reservation from './pages/Reservation';

test('renders learn react link', () => {
    const tree = renderer.create(<Reservation />).toJSON();
    expect(tree).toMatchSnapshot();
    });
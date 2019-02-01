import 'react-native';
import react from 'react';
import CommonHeader from '../src/screens/partial/CommonHeader';
import renderer from 'react-test-renderer';

jest.setTimeout(15000);

it('renders correctly', () => {
    const tree = renderer.create(<CommonHeader title="home" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
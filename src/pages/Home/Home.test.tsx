import { render } from '@testing-library/react';
import Home  from './home';

test('should render the welcome message', () => {
    const { queryByText } = render(<Home />);
    expect(queryByText(/Welcome to the Code Editor App/)).toBeInTheDocument();
    
})
import { render } from '@testing-library/react';
import FoodGrid from './FoodGrid';

describe('FoodGrid Component', () => {
  test('should render the component', async () => {
    render(<FoodGrid foodList={["https://example.com/image1.jpg", "https://example.com/image2.jpg"]} />);

  });
});
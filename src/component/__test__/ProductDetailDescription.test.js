import {render,screen} from '@testing-library/react'
import ProductDetailDescription from "../productdescription";

describe('ProductDetailDescription Component',()=>{
test('renders description elements', () => {
    const description = 'This is the product description';
    render(<ProductDetailDescription description={description} />);
    const headingElement = screen.getByRole('heading', {name: 'Descripcion del producto'});
    const descElement = screen.getByText(/this is the product description/i);
    expect(headingElement).toBeInTheDocument();
    expect(descElement).toBeInTheDocument();
  });
})
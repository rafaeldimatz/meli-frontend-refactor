import {render,screen,fireEvent,waitFor} from '@testing-library/react'
import Search from '../navbar/Search'
import { BrowserRouter } from "react-router-dom"

describe('Search Component',()=>{
  beforeEach(()=>{
    render(
      <BrowserRouter>
         <Search/>
      </BrowserRouter>
    );
  })

    test('should have a logo in the image',()=>{
        const testImage = screen.getByRole("img");
        expect(testImage).toBeInTheDocument();
    })
    test('component have a alt in the image',()=>{
        const testAlt = screen.getByRole("img");
        expect(testAlt).toHaveAttribute('alt', 'MercadoLibre')
    })

    test('component have a input',()=>{
        const inputElement = screen.getByPlaceholderText('Nunca dejes de buscar');
        expect(inputElement).toBeInTheDocument();
    })
    
    test('component should render text in input',()=>{
      const input = screen.getByTestId("inputsearch");
      const btnlupa = screen.getByTestId("lupa");
    
      const inputValue="Licuadora"
      //Action
      input.value=inputValue;
      fireEvent.change(btnlupa)
      expect(input.value).toBe(inputValue)
   })
},
describe('API tests endpoint mercadolibre', () => {
    test('should return a 200 response', async () => {
      const response = await fetch('https://api.mercadolibre.com//sites/MLA/search?q=');
      expect(response.status).toBe(200);
    });
}),
)


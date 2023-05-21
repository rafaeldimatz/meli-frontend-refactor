import {render,screen, waitFor, waitForElementToBeRemoved} from '@testing-library/react'
import ProductList from "../products";
import { BrowserRouter } from "react-router-dom"
import Spinner from '../loading/Spinner';

describe('ProductList Component',()=>{
test('renders productlist', () => {
    const view = render( <BrowserRouter><ProductList /></BrowserRouter>);
    expect(view).toBeTruthy();
  });

  /*test("fetch mock data", async () => {
    render(<BrowserRouter><ProductList /></BrowserRouter>);
    await waitForElementToBeRemoved(()=>screen.queryByText(/Loading/i));
    const producthaveimg =  screen.getByRole('img')
    expect(producthaveimg).toHaveLength(1)    
  });*/

})
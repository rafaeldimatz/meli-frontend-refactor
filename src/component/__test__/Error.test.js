import {render} from '@testing-library/react'
import ErrorPage from "../errorpage";
import { BrowserRouter } from "react-router-dom"

describe('Error Component',()=>{
test('renders error', () => {
    const view = render( <BrowserRouter><ErrorPage /></BrowserRouter>);
    expect(view).toBeTruthy();
  });
})
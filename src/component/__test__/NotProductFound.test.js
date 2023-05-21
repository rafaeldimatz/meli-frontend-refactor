import {screen, render} from '@testing-library/react'
import NotProductFound from '../notproducts'

describe('Component ErrorPage',()=>{
    test('Should render correctly',()=>{
        const view = render(<NotProductFound/>);
        expect(view).toBeTruthy();
    })
})
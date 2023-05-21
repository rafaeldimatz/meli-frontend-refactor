import {render} from '@testing-library/react'
import ErrorPage from '../errorpage'

describe('Component ErrorPage',()=>{
    test('Should render correctly',()=>{
        const view = render(<ErrorPage/>);
        expect(view).toBeTruthy();
    })
})
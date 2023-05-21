import ProductDetail from "../productdetail";
import {render} from '@testing-library/react'
import ProductList from "../products";


describe('ProductDetail Component',()=>{
    test('Should render component',()=>{
        const view = render(<ProductDetail/>);
        expect(view).toBeTruthy();
    })
})


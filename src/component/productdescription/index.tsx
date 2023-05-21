import React from 'react'

interface Props{
    description:string;
}
const ProductDetailDescription : React.FC<Props> = ({description}) => {
  return (
    <div className='description'>
          <h2>Descripcion del producto</h2>
          <p>{description}</p>
    </div>
  )
}
export default ProductDetailDescription;

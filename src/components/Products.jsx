import React from 'react'
import Product from './Product'
import { popularProducts } from '../Data'
import Styled from 'styled-components'



const Container = Styled.div`
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
    // justify-content: space-between;

`

const Products = () => {
  return (
    <Container>
        { popularProducts.map(item => (
            <Product item={item} index={item.id}/>
        )) }
    </Container>
  )
}

export default Products
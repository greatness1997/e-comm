import React from 'react'
import Styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Footer from '../components/Footer'
import { mobile } from '../Responsive'



const Container = Styled.div`

`

const Title = Styled.h1`
    margin: 20px;
`

const FilterContainer = Styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({  })}
`

const Filter = Styled.div`
    margin: 20px;
    // display: flex;
    // align-items: center;
    // flex-direction: row;
    ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
   

`

const FilterText = Styled.h3`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ fontSize: '14px', marginRight: '0px' })}
`

const Select = Styled.select`
    padding: 10px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: bold;
    ${mobile({ padding: '5px', margin: '5px 0px' })}
`

const Option = Styled.option``


const ProductList = () => {
  return (
    <Container>
        <Navbar />
        <Announcement />
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Select Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products />
        <NewsLetter />
        <Footer />
    </Container>
  )
}

export default ProductList
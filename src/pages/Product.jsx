import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import Styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import { mobile } from '../Responsive'


const Container = Styled.div``
const Wrapper = Styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`
const ImageContainer = Styled.div`
  flex: 1;
`
const Image = Styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '60vh' })}
`
const InfoContainer = Styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`
const Title = Styled.h1`
  font-size: 50px;
  ${mobile({ fontSize: '40px' })}
`
const Desc = Styled.p`
  padding: 20px 0px;
  font-size: 20px;
  font-weight: 400
  
`
const Price = Styled.span`
  font-size: 40px;
  font-weight: 100
`

const FilterContainer = Styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`
const Filter = Styled.div`
  display: flex;
  align-items: center;
`
const FilterTitle = Styled.span`
  font-size: 20px;
  font-weight: 200;
`
const FilterColor = Styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 10px;
  cursor: pointer;
  ${mobile({ width: '25px', height: '25px', margin: '0px 5px' })}
`
const FilterSize = Styled.select`
  padding: 10px;
  margin: 0px 10px
  
`
const FilterSizeOption = Styled.option``

const AddContainer = Styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`
const AmountContainer = Styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`
const Amount = Styled.span`
  width: 50px;
  height: 50px;
  border: 2px solid teal;
  border-radius: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 10px;
  font-size: 25px
`
const Button = Styled.button`
  padding: 15px;
  background-color: white;
  border: 2px solid teal;
  cursor: pointer;
  font-weight: 800;

  &: hover {
    background-color: #f8f4f4
  }
`


const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImageContainer>
          <Image src="https://www.nairaland.com/attachments/14710318_0ddc825e47dd4c75b6c90328a4a87644_jpeg_jpeg7ad39d6bff32ec6ef77116050f40ef34"/>
        </ImageContainer>
        <InfoContainer>
          <Title>Stock Jeans</Title>
          <Desc>Jeans means jeans made of high-quality materials and meant for European, Americans the world at large.</Desc>
          <Price>$25</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="gray"/>
              <FilterColor color="blue"/>
              <FilterColor color="black"/>
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
               
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove style={{ fontSize: '30px' }} />
              <Amount>1</Amount>
              <Add style={{ fontSize: '30px' }} />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  )
}

export default Product
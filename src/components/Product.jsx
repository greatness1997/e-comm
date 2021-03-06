import React from 'react'
import Styled from 'styled-components'
import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons'




const Info = Styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: rgba(0,0,0,0.1);
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.5s ease;
`

const Container = Styled.div`
    flex: 1;
    margin: 5px;
    min-width: 350px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`

const Circle = Styled.div``

const Image = Styled.img`
    height: 70%;
`


const Icon = Styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.5s ease;

    &: hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`

const Product = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
                <SearchOutlined />
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product
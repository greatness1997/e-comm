import { Search } from '@material-ui/icons'
import React from 'react'
import Styled from 'styled-components'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'


const Container = Styled.div`
    height: 60px;
`
const Wrapper = Styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
`
const Left = Styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = Styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 25px;
`
const SearchContainer = Styled.div`
    border: 2px solid lightgrey;
    display: flex;
    align-items: center;
`

const Input = Styled.input`
    border: none;
    padding: 5px;
`
const Center = Styled.div`
    flex: 1;
`

const Logo = Styled.h1`
    font-size: 25;
    font-weight: bold;
    text-align: center;
`

const Right = Styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
`

const MenuItems = Styled.span`
    font-size: 12;
    cursor: pointer;
    margin-left: 25px;
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input />
                    <Search style={{ color: 'gray', fontSize: 16, marginLeft: 5 }}/>
                </SearchContainer>
            </Left>
            <Center>
                <Logo>E-COMM</Logo>
            </Center>
            <Right>
                <MenuItems>REGISTER</MenuItems>
                <MenuItems>SIGN IN</MenuItems>
                <MenuItems>
                    <Badge badgeContent={4} color='primary'>
                        <ShoppingCartOutlined />
                    </Badge>
                </MenuItems>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar
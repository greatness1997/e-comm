import { Search } from '@material-ui/icons'
import React from 'react'
import Styled from 'styled-components'
import { Badge } from '@material-ui/core'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { mobile } from '../Responsive'


const Container = Styled.div`
    height: 60px;
    ${mobile({ height: '50px' })}
`
const Wrapper = Styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    ${mobile({ padding: '10px 0px' })}
`
const Left = Styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Language = Styled.span`
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 25px;
    ${mobile({ display: 'none' })}
`
const SearchContainer = Styled.div`
    border: 2px solid lightgrey;
    display: flex;
    align-items: center;
    ${mobile({ marginLeft: '10px' })}
`

const Input = Styled.input`
    border: none;
    padding: 5px;
    ${mobile({ width: '50px' })}
`
const Center = Styled.div`
    flex: 1;
`

const Logo = Styled.h1`
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    ${mobile({ fontSize: '18px', fontWeight: '800', marginLeft: '10px' })}
`

const Right = Styled.div`
   flex: 1;
   display: flex;
   justify-content: flex-end;
   ${mobile({ flex: 2, justifyContent: 'center' })}
`

const MenuItems = Styled.span`
    font-size: 14;
    font-weight: bold;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: '12px', fontWeight: 'bold', marginLeft: '10px'})}
`



const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input placeholder='Search'/>
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
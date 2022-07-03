import { Facebook, Instagram, LinkedIn, Pinterest, Twitter, Room, MailOutline, Phone } from '@material-ui/icons'
import React from 'react'
import Styled from 'styled-components'
import { mobile } from '../Responsive'



const Container = Styled.div`
    display: flex;
    flex-direction: row;
    ${mobile({ flexDirection: 'column' })}
`

const Left = Styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px
`

const Logo = Styled.h1``

const Desc = Styled.p`
    margin: 20px 0px
`

const SocialContainer = Styled.div`
    display: flex;
`

const Social = Styled.div`
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #${props => props.color};
    border-radius: 50%;
    margin-right: 10px
`

const Center = Styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: 'none' })}
`

const Title = Styled.h1`
    margin-bottom: 10px;
`

const List = Styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    list-style: none
`

const ListItems = Styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = Styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: '#fff8f8' })}
`

const Heading = Styled.h1`
    margin-bottom: 20px
`

const ContactItems = Styled.p`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = Styled.img`
    width: 50%
`



const Footer = () => {
  return (
    <Container>
        <Left>
        <Logo>E-COMM</Logo>
        <Desc> E-comm is a website that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service</Desc>
        <SocialContainer>
            <Social color="3B5999">
                <Facebook />
            </Social>
            <Social color="E4405F">
                <Instagram />
            </Social>
            <Social color="55ACEE">
                <Twitter />
            </Social>
            <Social color="E60023">
                <Pinterest />
            </Social>
            <Social color="3B5999">
                <LinkedIn />
            </Social>
        </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItems>Home</ListItems>
                <ListItems>Cart</ListItems>
                <ListItems>Man Fashion</ListItems>
                <ListItems>Woman Fashion</ListItems>
                <ListItems>Accessories</ListItems>
                <ListItems>My Account</ListItems>
                <ListItems>Order Tracking</ListItems>
                <ListItems>Favourite</ListItems>
                <ListItems>Whishlist</ListItems>
                <ListItems>Terms</ListItems>
            </List>
        </Center>
        <Right>
            <Heading>Contact</Heading>
            <ContactItems>
                <Room style={{ marginRight: '10px' }}/> Sangotedo, Ajah, Lagos State, Nigeria
            </ContactItems>
            <ContactItems>
                <Phone style={{ marginRight: '10px' }}/> +234 814 9316 140
            </ContactItems>
            <ContactItems>
                <MailOutline style={{ marginRight: '10px' }}/> omohotokina@gmail.com
            </ContactItems>
            <Payment src='https://i.ibb.co/Qfvn4z6/payment.png'/>
        </Right>
    </Container>
  )
}

export default Footer
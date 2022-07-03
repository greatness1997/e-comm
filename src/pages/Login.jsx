import React from 'react'
import Styled from 'styled-components'
import { mobile } from '../Responsive'

const Container = Styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
    ), 
    url('https://cdn.vox-cdn.com/thumbor/eZVHNKsJmgYYn9_mjgB-o2mY_48=/0x0:3840x2160/1400x1050/filters:focal(684x582:1298x1196):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/52895649/1.0.jpg') 
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrapper = Styled.div`
        width: 25%;
        padding: 20px;
        background-color: white;
        ${mobile({ width: '80%' })}
`

const Title = Styled.h1`
        font-size: 30px;
        font-weight: 900;
        text-align: center
`

const Form = Styled.form`
        display: flex;
        flex-direction: column;
`

const Input = Styled.input`
        flex: 1;
        min-width: 40%;
        margin: 10px 0px;
        padding: 10px
`

const Link = Styled.a`
        font-size: 17px;
        margin: 5px 0px;
        cursor: pointer;
        text-align: center;
        text-decoration: underline;
        ${mobile({ fontSize: '14px' })}
`

const Button = Styled.button`
        width: 100%;
        padding: 15px 20px;
        border:  none;
        background-color: teal;
        color: white;
        cursor: pointer;
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 20px;
        ${mobile({ padding: '10px' })}
`


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Button>LOGIN</Button>
                <Link>DO YOU REMEMBER YOUR PASSWORD?</Link>
                <Link>CREATE AN ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login
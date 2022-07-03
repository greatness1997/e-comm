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
    url('https://wallpaperaccess.com/full/1437631.jpg') 
    center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center
`

const Wrapper = Styled.div`
        width: 40%;
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
        flex-wrap: wrap;
`

const Input = Styled.input`
        flex: 1;
        min-width: 40%;
        margin: 20px 10px 0px 0px;
        padding: 10px
`

const Terms = Styled.span`
        font-size: 17px;
        margin: 20px 0px;
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

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name" />
                <Input placeholder="Last Name" />
                <Input placeholder="Email" />
                <Input placeholder="Username" />
                <Input placeholder="Password" />
                <Input placeholder="Comfirm Password" />
                <Terms>By creatin an account, I consent to the processing of my personal data in accordance with <b>PRIVATE POLICY</b></Terms>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register
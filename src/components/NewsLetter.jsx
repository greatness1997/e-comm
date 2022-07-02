import { Send } from '@material-ui/icons'
import React from 'react'
import Styled from 'styled-components'


const Container = Styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = Styled.h1`
    font-size: 70px;
    margin-bottom: 20px
`
const Desc = Styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`
const InputContainer = Styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
`
const Input = Styled.input`
    border: none;
    padding-left: 20px;
    flex: 8;
`
const Button = Styled.button`
    flex: 1;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: teal;
    color: white;
    border: none
`


const NewsLetter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates on your favourite products.</Desc>
        <InputContainer>
            <Input placeholder="Enter Your Email Address"/>
            <Button>
                <Send />
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter
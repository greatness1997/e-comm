import React from 'react'
import Styled from 'styled-components'
import { mobile } from '../Responsive'


const Container = Styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    ${mobile({ fontSize: '10px', fontWeight: 'bold' })}
`

const Announcement = () => {
  return (
    <Container>Super Deals! Free shipping when you order good above $50</Container>
  )
}

export default Announcement
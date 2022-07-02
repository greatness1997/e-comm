import React, { useState } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import Styled from 'styled-components'
import { sliderItems } from '../Data'

const Container = Styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

const Arrow = Styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    cursor: ponter;
    opacity: 0.5;
    z-index: 2
`

const Wrapper = Styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw)
`

const Slide = Styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImageContainer = Styled.div`
    flex: 1;
    height: 100%;
`

const Image = Styled.img`
    height: 80%;
`

const InfoContainer = Styled.div`
    flex: 1;
    padding: 50px;
`
const Title = Styled.h1`
    font-size: 70px;
`

const Desc = Styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = Styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
    }
`




const Slider = () => {
    const [ slideIndex, setSlideIndex ] = useState(0)

    const handleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }

  return (
    <Container>
        <Arrow direction='left' onClick={() => handleClick('left')}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper  slideIndex={slideIndex}>
            { sliderItems.map(item => {
                return(
                    <Slide>
                        <ImageContainer>
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc }</Desc>
                            <Button>SHOW NOW</Button>
                        </InfoContainer>
                    </Slide>
                )
            }) }
            
            
        </Wrapper>
        <Arrow direction='right' onClick={() => handleClick('right')}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
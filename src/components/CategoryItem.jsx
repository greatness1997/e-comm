import Styled from "styled-components";

const Container = Styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = Styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Info = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 150px;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`
const Title = Styled.h1`
    color: white;
    margin-button: 20px;
    text-shadow: 1px 1px 3px #000;
`
const Button = Styled.button`
    padding: 10px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    font-weight: 800;

`
 
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Info>
                <Title>{ item.title }</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
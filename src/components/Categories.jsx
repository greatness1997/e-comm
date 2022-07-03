import Styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";
import { mobile } from "../Responsive";


const Container = Styled.div`
    display: flex;
    padding: 20px;
    ${mobile({ padding: '0px', flexDirection: 'column' })}
`


const Categories = () => {
    return <Container>
        { categories.map(item => (
            <CategoryItem item={item} />
        )) }
    </Container>
        
    
}

export default Categories
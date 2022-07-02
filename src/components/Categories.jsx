import Styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";


const Container = Styled.div`
    display: flex;
    padding: 20px;
`


const Categories = () => {
    return <Container>
        { categories.map(item => (
            <CategoryItem item={item} />
        )) }
    </Container>
        
    
}

export default Categories
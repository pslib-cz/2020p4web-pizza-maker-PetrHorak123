import { ListGroup, ListGroupItem } from 'reactstrap';
import {useContext} from "react";
import {DataContext} from '../Providers/DataProvider.jsx';
import {Ingredient} from './Ingredient.jsx';

const Ingredients = props => {
    const [ingredients, setIngredients] = useContext(DataContext);
    {console.log(ingredients)}
    return (
        <ListGroup>
            <ListGroupItem>Cras justo odio</ListGroupItem>
            {ingredients.map((item, index) => (<Ingredient key={index} item={item} />))}
        </ListGroup>
        
        
    );
}

export default Ingredients;
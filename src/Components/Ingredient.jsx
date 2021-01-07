import { ListGroupItem, Row } from "reactstrap";

const Ingredient = ({item}) => {
    return (
        <ListGroupItem>Name: {item.name}, Category: {item.category}</ListGroupItem>
    );
}

export default Ingredient;
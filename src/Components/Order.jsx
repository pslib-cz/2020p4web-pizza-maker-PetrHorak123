import { Jumbotron, Container, ButtonGroup, Button } from 'reactstrap';

const Order = props => {
    return (
        <div>
        <Jumbotron fluid>
            <Container fluid>
                <h1 className="display-3">Choose your meal</h1> 
                <ButtonGroup size="lg">
                    <Button href="/order/pizza">Pizza</Button>
                    <Button href="/order/calzone">Calzone</Button>                    
                </ButtonGroup>              
            </Container>
        </Jumbotron>
    </div>
    );
}

export default Order;
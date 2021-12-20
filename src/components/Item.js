import { Card, Button } from "react-bootstrap";
const Item = {
    Item: (props) => (
        // <div>
        //     <h1>{props.title}</h1>
        //     <p>{props.id}</p>
        //     <p>{props.description}</p>
        //     <p>{props.price}</p>
        //     <p>{props.pictureUrl}</p>
        // </div>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.pictureUrl} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.description}
                </Card.Text>
                <Card.Text>
                    {props.price}
                </Card.Text>
                <Button variant="primary">Ver detalle del producto</Button>
            </Card.Body>
        </Card>
    ),
    Item2: (props) => (
        <div>
            <p>{props.imagen}</p>
            <h1>{props.titulo}</h1>
            <p>{props.descr}</p>
        </div>
    )
}
export default Item;
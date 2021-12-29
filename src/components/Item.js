import { Card, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.picture} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>Precio $
                    {props.price}
                </Card.Text>
                <div><NavLink to={`/item/${props.id}`}>Ver detalle del producto</NavLink></div>
                {/* <Button variant="primary">Ver detalle del producto<NavLink to={`/${props.id}`}></NavLink></Button> */}
            </Card.Body>
        </Card>
    )
}
export default Item;
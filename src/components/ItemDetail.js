import React from "react";
import CounterButton from "./CounterButton"
import { Row, Col, Image } from "react-bootstrap";


function ItemDetail({ item, initialValue, restar, sumar, message, onAdd }) {


    const Modal = () => {
        return(
            <div>
                <p>Se alcanzó el límite permitido</p>
            </div>
        )
    }

    return(
        <div>
            {item.length?? (
                <Row style={{justifyContent: "center"}}>
                    <Col md={5} lg={4}><Image src={item.thumbnail} style={{ width: 250}}></Image></Col>
                    <Col md={5} lg={4}>
                        <h3>{item.title}</h3>
                        <p>$ {item.price}</p>
                        <p>Material: Cot fine twill (92% algodón y 8% spandex).</p>
                        <p>Color: Blanco.</p>
                        <p>Detalles de la prenda: Pantalón estilo Jazz, ceñido en la cintura hasta la cadera y luego una ligera caída en A. La tela es stretch, así que se adaptará a tu figura. Las aberturas de la basta y el color, lo convertirán en el statement piece de tu look. Perfecto para outfits casuales o formales, todo dependerá de como lo complementes.</p>
                        <p>Tallas: 24 - 26 - 28 - 30 - 32</p>
                        <CounterButton initialValue={initialValue} stockItem={6} restar={restar} sumar={sumar} onAdd={onAdd}></CounterButton>
                         {message && <Modal />}                        
                    </Col>
                </Row>
                
            )}
            
            
        </div>
    );
}
export default ItemDetail;
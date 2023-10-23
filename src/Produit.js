import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {remove} from "./ListProduit.js"



function produit(props) {
  return (

    <Card className='produit' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>name : {props.name}</Card.Title>
        <Card.Text>
            price : $ {props.price}
            <br></br>
            mobile version : {props.version}
          
        </Card.Text>
        <Button onClick={remove()} variant="primary">Go somewhere</Button> 
      </Card.Body>
    </Card>
    
  );
}

export default produit;
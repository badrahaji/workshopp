import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



 

function produit(props) {

 

  const handleRemoveClick = () => {
    props.onRemove(props);
  };
  return (

    <Card className='produit' id={props.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.src} />
      <Card.Body>
        <Card.Title>name : {props.name}</Card.Title>
        <Card.Text>
            price : $ {props.price}
            <br></br>
            mobile version : {props.version}
          
        </Card.Text>
        <Button onClick={handleRemoveClick} >
          Remove
        </Button>
      </Card.Body>
    </Card>
    
  );
}

export default produit;
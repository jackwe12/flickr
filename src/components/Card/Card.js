import Figure from 'react-bootstrap/Figure';
import React from 'react';
import { useState} from 'react';
import {Card, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';
import './Card.css';


function ImageCard(props){
    const {index,item} = props
    const [show, setShow] = useState(false);

    return(

      <React.Fragment>
      <Card 
      style={{ width: '5rem%', margin:'5px' }}
      >
        <Card.Img 
        variant="top" 
        src={item.media.m}
        onClick={()=>{setShow(true)}}
         />
        <Card.Body>
          <Card.Title>Title: {item.title}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem className="text-muted">Author:  {item.author}</ListGroupItem>
          <ListGroupItem className="text-muted">Date Taken:  {item.date_taken}</ListGroupItem>
          <ListGroupItem className="text-muted">Tags: {item.tags}</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href={item.link} target="_blank">Image Link to Flickr </Card.Link>
        </Card.Body>
      </Card>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-100w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {item.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Figure key={index}>
          <Figure.Image
            width={window.innerWidth}
            src={item.media.m}
            style={{cursor:'grab'}}
          />
         </Figure>
        </Modal.Body>
      </Modal>
      </React.Fragment>

      





    )
}

export default ImageCard;

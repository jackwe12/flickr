import React from 'react';
import { useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import ModalBox from '../Modal/Modal';
import './Card.css';


function ImageCard(props) {
  const { index, item } = props
  const [show, setShow] = useState(false);

  return (

    <React.Fragment>
      <Card
        style={{ width: '100%', margin: '5px' }}
      >
        <Card.Img
          variant="top"
          src={item.media.m}
          onClick={() => { setShow(true) }}
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
      <ModalBox
        item={item}
        index={index}
        show={show}
        setShow={setShow}
      />

    </React.Fragment>







  )
}

export default ImageCard;

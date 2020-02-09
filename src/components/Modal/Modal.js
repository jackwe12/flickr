import React from 'react';
import { Modal, Figure } from 'react-bootstrap';


function ModalBox(props) {
    const { index, item } = props
    const { show, setShow } = props;



    return (

        <React.Fragment>
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
                            style={{ cursor: 'grab' }}
                        />
                    </Figure>
                </Modal.Body>
            </Modal>
        </React.Fragment>







    )
}

export default ModalBox;

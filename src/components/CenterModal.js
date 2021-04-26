import React from 'react';
import {Modal, Button} from 'react-bootstrap'

function CenterModal(props) {
    return (
			<div>
				<Modal
					{...props}
					size='lg'
					aria-labelledby='contained-modal-title-vcenter'
					centered>
					<Modal.Header closeButton>
						<Modal.Title id='contained-modal-title-vcenter'>
							Modal heading
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<img src='https://images.asos-media.com/products/puma-rs-x3-gradient-sneakers-in-black-and-red/21140235-1-lavablastpumablac?%24XXL%24=&wid=513&fit=constrain'></img>
						<h4>Centered Modal</h4>
						<p>
							Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
							dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
							ac consectetur ac, vestibulum at eros.
						</p>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={props.onHide}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
}

export default CenterModal;
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';

/*
  Need to study "portals"
  Setting container to 'fixed' gives elements inside an anchor.
    absolute:  Element is positioned relative to its first positioned
                (not static) ancestor element
    fixed:     Element is positioned relative to browser window.

    MODAL RENDERED
    Below are default values for ReactBootstrap modal. These steps set
    the modal.

      1. Find the first element of the modal container that is set at 'fixed'.
         If one does not exist, make one.
      2. Set the child of the fixed element relative to the position of the parent.
      3. Find the position of the relevant edge of the container. The relevant edge
         is the one you are offsetting from via "absolute" using Left, Right, Top or
         Bottom.
      4. Set the child for absolute.  It can now be moved relative to the fixed
         parent container edges.  Calculate the necessary deltas to move the modal
         where you want it to go.

      <div class="modal-backdrop show"></div>       position: fixed; (default)
      <div class="modal" style="display: block;">   position: fixed; (default)
        <div class="modal-dialog">                  position: relative (default)
          <div class="modal-content">
            <div class="modal-header">Header</div>
            <div class="modal-body">Click Me</div>
            <div class="modal-footer">Footer</div>
          </div>
        </div>
      </div>`
*/

const SModal = styled(Modal)`
  .modal-backdrop.show { /* set at fixed by default */ }
  .modal { /* set at fixed by default */ }

  .modal-dialog {
    bottom: 185px;
    right: 170px;
    position: absolute;
  }

  .modal-content {
    background-color: seagreen;
    height: 600px;
    width: 300px;
  }
`;

const SModalBody = styled(Modal.Body)``;

const SModalHeader = styled(Modal.Body)``;

const FAB = styled(Button)`
  background-color: green;
  border-radius: 50%;
  border: none;
  height:3rem;
  position: absolute;
  width:3rem;
  z-index: 1080;
  bottom: 147px;
  right: 147px;
`;

const BootModal = ({ handleClick }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className='my-container-class'>
        <SModal
          animation={false}
          show={true}
          keyboard
        >
          <SModalHeader>Header</SModalHeader>
          <SModalBody
            onClick={() => setToggle(false)}
          >
            Click Me
          </SModalBody>
          <Modal.Footer>Footer</Modal.Footer>
        </SModal>
      </div>
      <FAB
        onClick={() => setToggle(() => !toggle)}
      ></FAB>
    </>
  );
}

export default BootModal;

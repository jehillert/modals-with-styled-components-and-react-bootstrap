import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components/macro';

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
  height: 48px;
  position: absolute;
  width: 48px;
  z-index: 1080;
  bottom: 147px;
  right: 147px;
`;

const BootModal = ({ handleClick }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <SModal animation={false} show={toggle} keyboard>
        <SModalHeader>Header</SModalHeader>
        <SModalBody onClick={() => setToggle(false)}>Click Me</SModalBody>
        <Modal.Footer>Footer</Modal.Footer>
      </SModal>
      <FAB onClick={() => setToggle(() => !toggle)}></FAB>
    </>
  );
}

export default BootModal;

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
      2. Set the immediate child of that container to absolute and use offset
         values for Left, Right, Top and Bottom that position the child where
         desired.
      3. To calculate the right offset values, find the position of the relevant
         edge of the container. The relevant edge is the one that matches the
         direction of the offset. So if using Left property, find where the
         containers left side is.

      <div class="modal-backdrop show"></div>       position: fixed; (default)    Not an anscestor --- 'absolute' will not work
      <div class="modal dialog">                    position: fixed; (default)    First
        <div class="modal-dialog">                  position: relative (default)
          <div class="modal-content">               position: relative (default)
            <div class="modal-header">Header</div>
            <div class="modal-body">Click Me</div>
            <div class="modal-footer">Footer</div>
          </div>
        </div>
      </div>`

  The answer here turned out to be easy.  The outermost container was set to
  'fixed' and it filled the entire screen.  All that was needed was add the value
  to the zero wall coordinate, and the modal moves into place.

  Next Time:
    1. Set the cursor on the DOM tree in question (recursive open not necessary)
    2. Set a filter for the desired properties.
    3. Arrow down to get the exact order, so you know where to intervene.

  */

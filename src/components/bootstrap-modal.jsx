import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styled from 'styled-components';


const S = {}

// fixing this gives the modal a fram of reference.
S.ModalContainer = styled.div`
    position: fixed;
    bottom: 0px;
    right: 0px;
`;


bootstrap modal

S.Modal = styled(Modal)`
  .modal-backdrop.show {
  }

  .modal-dialog {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  .modal-content {
    background-color: seagreen;
    height: 600px;
    width: 300px;
  }
`;

S.ModalBody = styled(S.Modal.Body)``;


S.Button = styled(Button)`
  background-color: red;
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
      <S.ModalContainer>
        <S.Modal
          animation={false}
          show={true}
          keyboard
        >
          <S.Modal.Header>Header</S.Modal.Header>
          <S.ModalBody
            as='button'
            onClick={() => setToggle(false)}
          >
            Click Me
          </S.ModalBody>
          <S.Modal.Footer>Footer</S.Modal.Footer>
        </S.Modal>
      </S.ModalContainer>
      <S.Button
        onClick={() => setToggle(() => !toggle)}
      ></S.Button>
    </>
  );
}

export default BootModal;

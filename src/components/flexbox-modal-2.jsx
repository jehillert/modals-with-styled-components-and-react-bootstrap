import React from 'react';
import styled from 'styled-components/macro';

// need a 'modal theme'

const M = {};

M.OuterContainer = styled.div`
  border: 2px black solid;
  background-color: lightgray;
  position: fixed;
  left: 35%;
  bottom: 25%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 500px;
  min-width: 300px;
  padding: 1rem;
`;

M.InnerContainer = styled.div`
  display: flex;
  flex-grow: 1;
  background-color: white;
  flex-flow: column nowrap;
`;

M.Header = styled.div`
  background-color: lightskyblue;
  border: 2px blue solid;
  flex-grow: 1;
`;

M.Row = styled.div`
  background-color: palegreen;
  border: 1px #008B8B solid;
  flex-grow: 2;
  margin: 1rem;
`;

M.Footer = styled.div`
  background-color: lightred;
  border: 2px red solid;
  flex-grow: 1;
`;


const Modal = (props) => {
  return (
    <>
      <M.OuterContainer>
        <M.InnerContainer>
          <M.Header>Header</M.Header>
          <M.Row>Row</M.Row>
          <M.Row>Row</M.Row>
          <M.Row>Row</M.Row>
          <M.Footer>Footer</M.Footer>
        </M.InnerContainer>
      </M.OuterContainer>
    </>
  );
}

export default Modal;

/*
NOTE:
flex-grow specifies the fractional share a child will take up relative to other children.  Say there were three children, and flex-grow was CHILD_A(5) CHILD_B(1) CHILD_C(1).
Then CHILD_A would expand into 5/7 of the space available between the three.

*/

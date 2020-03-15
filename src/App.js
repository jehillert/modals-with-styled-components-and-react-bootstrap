import React from 'react';
import Modal1 from './components/flexbox-modal';
import Modal2 from './components/flexbox-modal-2';
import RBModal from './components/bootstrap-modal';
import StyledReactModalBuutton from './components/styled-react-modal-button';
import theme from './theme/theme';
import GlobalStyle from './theme/global-style';
import { ThemeProvider } from 'styled-components';
import { ModalProvider } from 'styled-react-modal'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Modal1></Modal1>
        <Modal2></Modal2>
        <ModalProvider>
          <StyledReactModalBuutton />
          <RBModal />
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default App;

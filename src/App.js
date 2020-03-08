import React from 'react';
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
        <ModalProvider>
          <StyledReactModalBuutton />
          <RBModal />
        </ModalProvider>
      </ThemeProvider>
    </>
  )
}

export default App;

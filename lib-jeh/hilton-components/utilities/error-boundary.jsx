import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    if (errorInfo) {
      // Error path
      return (
        <>
          <h3>Something went wrong.</h3>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <br />
            {error && error.toString()}
            {errorInfo.componentStack}
          </details>
          <br />
        </>
      );
    }
    // Normally, just render children
    return children;
  }
}

ErrorBoundary.defaultProps = {
  children: null,
};

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};

export default ErrorBoundary;

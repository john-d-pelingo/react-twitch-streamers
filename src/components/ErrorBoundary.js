import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { css } from 'emotion'

class ErrorBoundary extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error, errorInfo) {
    // Catch errors in any child components and re-renders with an error message
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state

    if (error) {
      // Fallback UI if an error occurs
      return (
        <div className={errorBoundary}>
          <h2>Oh-no! Something went wrong</h2>
          <p className="red">{error && error.toString()}</p>
          <div>Component Stack Error Details: </div>
          <p className="red">{errorInfo.componentStack}</p>
        </div>
      )
    }

    // Component normally just renders children
    return this.props.children
  }
}

// =======
// STYLING
// =======

const errorBoundary = css`
  .red {
    color: #fe5252;
    font-weight: bold;
  }
`

export default ErrorBoundary

import { css } from 'emotion'
import { Component, ErrorInfo, ReactNode } from 'react'

interface IErrorBoundaryState {
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<
  {
    children?: ReactNode
  },
  IErrorBoundaryState
> {
  state = {
    error: null,
    errorInfo: null,
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // NOTE: Catch errors in any child components and re-renders with an error message
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { error, errorInfo } = this.state

    if (error && errorInfo) {
      // NOTE: Fallback UI if an error occurs
      return (
        <div className={errorBoundaryCss}>
          <h2>Oh-no! Something went wrong</h2>
          <p className="red">{(error as unknown as Error).toString()}</p>
          <div>Component Stack Error Details: </div>
          <p className="red">
            {(errorInfo as unknown as ErrorInfo).componentStack}
          </p>
        </div>
      )
    }

    // NOTE: Component normally just renders children
    return this.props.children
  }
}

const errorBoundaryCss = css`
  .red {
    color: #fe5252;
    font-weight: bold;
  }
`

import _throttle from 'lodash/throttle'
import { Component, ComponentType } from 'react'

interface IParameters {
  listName: string
  onEndScrollName: string
  wait: number
}

// TODO: use hook
interface IInfiniteScrollProps {
  // TODO: fix any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any
}

export const withInfiniteScroll =
  ({ listName, onEndScrollName, wait = 1000 }: IParameters) =>
  (WrappedComponent: ComponentType) => {
    class InfiniteScroll extends Component<IInfiniteScrollProps> {
      static displayName = `${withInfiniteScroll.name}(${
        WrappedComponent.displayName || WrappedComponent.name
      })`

      componentDidMount() {
        window.addEventListener('scroll', this.throttledHandleScroll, false)
      }

      componentWillUnmount() {
        window.removeEventListener('scroll', this.throttledHandleScroll, false)
      }

      handleScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
            document.body.offsetHeight - 75 &&
          this.props[listName].length
        ) {
          this.props[onEndScrollName]()
        }
      }

      // window.removeEventListener has to look at all registered event listeners
      // for the target and event, and does an equality check on the event handler
      // that was passed to it - if it finds a match, it removes it.
      //
      // _throttle returns a new function every time you run it; therefore, the
      // equality check will always fail and you will be unable to remove the
      // event listener (without removing all event listeners).
      throttledHandleScroll = _throttle(this.handleScroll, wait)

      render() {
        return <WrappedComponent {...this.props} />
      }
    }

    return InfiniteScroll
  }

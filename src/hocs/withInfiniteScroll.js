import React from 'react';
import PropTypes from 'prop-types';
import _throttle from 'lodash/throttle';

const withInfiniteScroll = ({
  list,
  onEndScroll,
  wait = 1000
}) => Component => {
  class InfiniteScroll extends React.Component {
    static propTypes = {
      [list]: PropTypes.array,
      [onEndScroll]: PropTypes.func.isRequired
    };

    static defaultProps = {
      [list]: []
    };

    static displayName = `${withInfiniteScroll.name}(${Component.displayName ||
      Component.name})`;

    componentDidMount() {
      window.addEventListener('scroll', this.throttledHandleScroll, false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledHandleScroll, false);
    }

    handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 75 &&
        this.props[list].length
      ) {
        this.props[onEndScroll]();
      }
    };

    // window.removeEventListener has to look at all registered event listeners
    // for the target and event, and does an equality check on the event handler
    // that was passed to it - if it finds a match, it removes it.
    //
    // _throttle returns a new function every time you run it; therefore, the
    // equality check will always fail and you will be unable to remove the
    // event listener (without removing all event listeners).
    throttledHandleScroll = _throttle(this.handleScroll, wait);

    render() {
      return <Component {...this.props} />;
    }
  }

  return InfiniteScroll;
};

export default withInfiniteScroll;

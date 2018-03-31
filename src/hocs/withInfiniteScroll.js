import React from 'react';
import PropTypes from 'prop-types';
import _throttle from 'lodash/throttle';

const withInfiniteScroll = ({ list, onEndScroll, wait }) => Component => {
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
      window.addEventListener('scroll', this.throttledHandleScroll(), false);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.throttledHandleScroll(), false);
    }

    handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        this.props[list].length
      ) {
        this.props[onEndScroll]();
      }
    };

    throttledHandleScroll = () => {
      return _throttle(this.handleScroll, wait);
    };

    render() {
      return <Component {...this.props} />;
    }
  }

  return InfiniteScroll;
};

export default withInfiniteScroll;

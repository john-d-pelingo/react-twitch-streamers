import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import { GRAY, LIGHT_GRAY, MINT_GREEN } from 'src/constants/colors';

class StreamCard extends Component {
  static propTypes = {
    isOnline: PropTypes.bool,
    link: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string,
    username: PropTypes.string.isRequired
  };

  static defaultProps = {
    isOnline: true,
    title: ''
  };

  render() {
    const { isOnline, link, thumbnail, title, username } = this.props;

    return (
      <div className={streamCard}>
        <span className={cx('status', isOnline && 'online')} />
        <div className="profile">
          <a
            href={link}
            className="stream-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={thumbnail} alt={username} className="stream-image" />
          </a>
        </div>
        <span className="username">{username}</span>
        <p className="stream-description">{title}</p>
      </div>
    );
  }
}

// =======
// STYLING
// =======

const streamCard = css`
  position: relative;
  min-height: 280px;
  width: 200px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 7.5px;
  transition: all 0.3s linear;

  &:hover {
    transform: scale(1.03);
  }

  .status {
    position: absolute;
    right: 20px;
    top: 20px;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background: ${LIGHT_GRAY};
  }

  .status.online {
    background: ${MINT_GREEN};
  }

  .profile {
    width: 170px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto;
  }

  .username {
    display: inline-block;
    font-size: 18px;
    font-weight: bold;
    color: ${GRAY};
    text-align: center;
    margin: 15px 0;
    width: 100%;
    word-wrap: break-word;
  }

  .stream-description {
    text-align: center;
    margin-bottom: 15px;
    word-wrap: break-word;
  }
`;

export default StreamCard;

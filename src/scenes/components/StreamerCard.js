import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, cx } from 'emotion';

import { GRAY, LIGHT_GRAY, MINT_GREEN } from 'src/features/constants/colors';

class StreamerCard extends Component {
  static propTypes = {
    isOnline: PropTypes.bool,
    streamDescription: PropTypes.string,
    streamImage: PropTypes.string.isRequired,
    streamLink: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
  };

  static defaultProps = {
    isOnline: false,
    streamDescription: ''
  };

  render() {
    const {
      isOnline,
      streamDescription,
      streamLink,
      streamImage,
      username
    } = this.props;

    return (
      <div className={streamerCard}>
        <span className={cx('status', isOnline && 'online')} />
        <div className="profile">
          <a
            href={streamLink}
            className="stream-link"
            rel="noreferrer noopener"
            target="_blank"
          >
            <img src={streamImage} alt={username} className="stream-image" />
          </a>
        </div>
        <span className="username">{username}</span>
        <p className="stream-description">{streamDescription}</p>
      </div>
    );
  }
}

// =======
// STYLING
// =======

const streamerCard = css`
  position: relative;
  min-height: 280px;
  width: 200px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin: 7.5px;
  transition: all 0.3s linear;

  .status {
    position: absolute;
    right: 15px;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: ${LIGHT_GRAY};
  }

  .status.online {
    background: ${MINT_GREEN};
  }

  .profile {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 15px;
  }

  .username {
    display: inline-block;
    font-size: 18px;
    color: ${GRAY};
    text-align: center;
    margin-bottom: 15px;
    width: 100%;
    word-wrap: break-word;
  }

  .stream-description {
    text-align: center;
    margin-bottom: 15px;
    word-wrap: break-word;
  }
`;

export default StreamerCard;

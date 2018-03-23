import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

class GameCard extends Component {
  static propTypes = {
    imageLink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  };

  render() {
    const { imageLink, name } = this.props;

    return (
      <div className={gameCard}>
        {imageLink} {name}
      </div>
    );
  }
}

// =======
// STYLING
// =======

const gameCard = css``;

export default GameCard;

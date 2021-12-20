import React from 'react';
import PropyTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardId } = this.props;
    return (
      <div cardId={ cardId }>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <p data-testid="description-card">{ cardDescription }</p>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        { cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropyTypes.string.isRequired,
  cardDescription: PropyTypes.string.isRequired,
  cardAttr1: PropyTypes.string.isRequired,
  cardAttr2: PropyTypes.string.isRequired,
  cardAttr3: PropyTypes.string.isRequired,
  cardImage: PropyTypes.string.isRequired,
  cardRare: PropyTypes.string.isRequired,
  cardTrunfo: PropyTypes.bool.isRequired,
  cardId: PropyTypes.number.isRequired,
};

export default Card;

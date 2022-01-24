import React from 'react';
import PropyTypes from 'prop-types';

const ifTrue = (
  <h3
    id="trunfo-card"
    data-testid="trunfo-card"
  >
    Super Trunfo
  </h3>
);

class Card extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, cardId } = this.props;
    return (
      <section className="card-section">
        <div className="card-container" cardId={ cardId }>
          <h2
            id="name-card"
            className="title"
            data-testid="name-card"
          >
            { cardName }
          </h2>
          <img
            id="image-card"
            data-testid="image-card"
            src={ cardImage }
            alt={ cardName }
          />
          <p
            id="description-card"
            className="description"
            data-testid="description-card"
          >
            { cardDescription }
          </p>
          <h3
            id="attr1-card"
            data-testid="attr1-card"

          >
            { `Força: ${cardAttr1}` }
          </h3>
          <h3
            id="attr2-card"
            data-testid="attr2-card"
          >
            { `Destreza: ${cardAttr2}` }
          </h3>
          <h3
            id="attr3-card"
            data-testid="attr3-card"
          >
            { `Inteligência: ${cardAttr3}` }
          </h3>
          <h3
            id="rare-card"
            data-testid="rare-card"
          >
            { cardRare }
          </h3>
          {cardTrunfo && ifTrue}
        </div>
      </section>
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

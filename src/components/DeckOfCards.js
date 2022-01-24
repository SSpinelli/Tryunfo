import React from 'react';
import PropTypes from 'prop-types';
import './style/second-container.css';

const ifTrue = (
  <h4
    data-testid="trunfo-card"
  >
    Super Trunfo
  </h4>
);

class DeckOfCards extends React.Component {
  render() {
    const { deck, removeCard, filteredDeck,
      filterName, filterRare, filterTrunfo } = this.props;
    let deckToUse = deck;
    const trueName = !!filterName;
    const trueFilter = !!filterRare;

    if (trueName || trueFilter || filterTrunfo) {
      deckToUse = filteredDeck;
    }

    return (
      <div className="deck-section">
        { deckToUse.map((card, index) => (
          <div className="deck-container" key={ index } id={ index }>
            <h2 className="current-card" data-testid="name-card">{ card.cardName }</h2>
            <img
              className="current-card"
              data-testid="image-card"
              src={ card.cardImage }
              alt={ card.cardName }
            />
            <p data-testid="description-card">{ card.cardDescription }</p>
            <h3 data-testid="attr1-card">{ `For: ${card.cardAttr1}` }</h3>
            <h3 data-testid="attr2-card">{ `Des: ${card.cardAttr2}` }</h3>
            <h3 data-testid="attr3-card">{ `Int: ${card.cardAttr3}` }</h3>
            <h3 data-testid="rare-card">{ card.cardRare }</h3>
            { card.cardTrunfo && ifTrue }
            <h5 data-testid="numberOfCard">{ index }</h5>
            <button
              data-testid="delete-button"
              className="delete-btn"
              type="button"
              onClick={ removeCard }
            >
              Excluir
            </button>
          </div>
        ))}
      </div>
    );
  }
}

DeckOfCards.propTypes = {
  deck: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeCard: PropTypes.func.isRequired,
  filteredDeck: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
};

export default DeckOfCards;

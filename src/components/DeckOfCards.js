import React from 'react';
import PropTypes from 'prop-types';

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
      <>
        { deckToUse.map((card, index) => (
          <div key={ index } id={ index }>
            <h2 data-testid="name-card">{ card.cardName }</h2>
            <img data-testid="image-card" src={ card.cardImage } alt={ card.cardName } />
            <h3 data-testid="attr1-card">{ card.cardAttr1 }</h3>
            <h3 data-testid="attr2-card">{ card.cardAttr2 }</h3>
            <h3 data-testid="attr3-card">{ card.cardAttr3 }</h3>
            <p data-testid="description-card">{ card.cardDescription }</p>
            <h3 data-testid="rare-card">{ card.cardRare }</h3>
            { card.cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
            <h5 data-testid="numberOfCard">{ index }</h5>
            <button
              data-testid="delete-button"
              type="button"
              onClick={ removeCard }
            >
              Excluir
            </button>
          </div>
        ))}
      </>
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

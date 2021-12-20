import React from 'react';
import Card from './components/Card';
import DeckOfCards from './components/DeckOfCards';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.enableButton = this.enableButton.bind(this);
    this.checkStrings = this.checkStrings.bind(this);
    this.checkNumbers = this.checkNumbers.bind(this);
    this.createCard = this.createCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
  }

  onInputChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => this.enableButton());
  }

  onSaveButtonClick(click) {
    click.preventDefault();
    const { deck, cardTrunfo } = this.state;

    this.setState({ deck: [...deck, this.createCard()] });

    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: '',
      cardTrunfo: false,
    });

    if (cardTrunfo) this.setState({ hasTrunfo: true });
  }

  createCard() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardRare, cardTrunfo, cardImage } = this.state;
    return {
      cardName,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardDescription,
      cardRare,
      cardTrunfo,
    };
  }

  enableButton() {
    if (this.checkStrings() && this.checkNumbers()) {
      return this.setState({ isSaveButtonDisabled: false });
    }
    this.setState({ isSaveButtonDisabled: true });
  }

  checkNumbers() {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxValue = 90;
    const firstAttr = cardAttr1 >= 0 && cardAttr1 <= maxValue;
    const secondAttr = cardAttr2 >= 0 && cardAttr2 <= maxValue;
    const thirdAttr = cardAttr3 >= 0 && cardAttr3 <= maxValue;
    const sumOfAttr = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);

    const maxSum = 210;

    return firstAttr && secondAttr && thirdAttr && sumOfAttr <= maxSum;
  }

  checkStrings() {
    const { cardName, cardDescription, cardImage, cardRare } = this.state;

    return cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0;
  }

  removeCard(click) {
    const index2 = click.target.parentElement.id;
    const { deck } = this.state;
    console.log(click);

    const newDeck = deck.filter((_card, index) => Number(index2) !== index);
    const deleteTrunfo = newDeck.some((card) => card.cardTrunfo);

    if (!deleteTrunfo) this.setState({ hasTrunfo: false });
    this.setState({ deck: newDeck });
  }

  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, deck } = this.state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <DeckOfCards
          deck={ deck }
          removeCard={ this.removeCard }
        />
      </>
    );
  }
}

export default App;

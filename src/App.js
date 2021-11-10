import React from 'react';
import Card from './components/Card';
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
      cards: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.newCard = this.newCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
      const MAXNUMBER = 90;
      const MINNUMBER = 0;
      const MAXSUM = 210;
      const SUMOFATTR = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      return (
        cardName === ''
        || cardDescription === ''
        || (cardAttr1 > MAXNUMBER || cardAttr1 < MINNUMBER)
        || (cardAttr2 > MAXNUMBER || cardAttr2 < MINNUMBER)
        || (cardAttr3 > MAXNUMBER || cardAttr3 < MINNUMBER)
        || (SUMOFATTR > MAXSUM)
        || cardImage === ''
        || cardRare === ''
      )
        ? this.setState({ isSaveButtonDisabled: true })
        : this.setState({ isSaveButtonDisabled: false });
    });
  }

  onSaveButtonClick(click) {
    const { newCard } = this;
    click.preventDefault();
    this.setState((moment) => (
      { cards: [...moment.cards, newCard()] }
    ));
    this.resetForm();
    console.log(this.state.cards);
  }

  newCard() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, hasTrunfo } = this.state;

    const createdCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
    };
    return createdCard;
  }

  resetForm() {
    this.setState(({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  }

  render() {
    const { cardName, cardDescription, cardAttr1,
      cardAttr2, cardAttr3, cardImage, cardRare,
      cardTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
          hasTrunfo={ false }
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
      </div>
    );
  }
}

export default App;

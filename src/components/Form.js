import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    const ifFalse = (
      <label htmlFor="trunfo">
        Trunfo:
        <input
          type="checkbox"
          name="cardTrunfo"
          id="trunfo"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
      </label>
    );
    return (
      <form hasTrunfo={ hasTrunfo }>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            id="name"
            name="cardName"
            data-testid="name-input"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="image">
          Imagem:
          <input
            type="text"
            name="cardImage"
            id="image"
            data-testid="image-input"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="description">
          Descrição:
          <textarea
            name="cardDescription"
            id="description"
            data-testid="description-input"
            cols="30"
            rows="10"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="first-attr">
          Força:
          <input
            type="number"
            name="cardAttr1"
            id="first-attr"
            data-testid="attr1-input"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="second-attr">
          Destreza:
          <input
            type="number"
            name="cardAttr2"
            id="second-attr"
            data-testid="attr2-input"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="third-attr">
          Inteligência:
          <input
            type="number"
            name="cardAttr3"
            id="third-attr"
            data-testid="attr3-input"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="raridade">
          Raridade:
          <select
            name="cardRare"
            id="raridade"
            data-testid="rare-input"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        {hasTrunfo ? <h2>Você Já tem um Super Trunfo em seu baralho</h2> : ifFalse}
        <button
          type="submit"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;

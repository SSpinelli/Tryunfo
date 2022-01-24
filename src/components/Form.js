import React from 'react';
import PropTypes from 'prop-types';
import './style/first-container.css';

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
      <section className="form-section">
        <form hasTrunfo={ hasTrunfo }>
          <h1>Super Tryunfo</h1>
          <label htmlFor="name">
            <input
              type="text"
              id="name"
              name="cardName"
              placeholder="Name:"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="image">
            <input
              type="text"
              name="cardImage"
              placeholder="Url da imagem:"
              id="image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="description">
            <textarea
              name="cardDescription"
              id="description"
              placeholder="Descrição"
              data-testid="description-input"
              cols="20"
              rows="3"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>
          <label htmlFor="first-attr">
            For:
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
            Des:
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
            Int:
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
          {hasTrunfo ? <h4>Você Já tem um Super Trunfo em seu baralho</h4> : ifFalse}
          <button
            type="submit"
            className="btn-salvar"
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </section>
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

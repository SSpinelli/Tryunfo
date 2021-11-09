import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form action="">
        <label htmlFor="cardName">
          <input type="text" name="cardName" data-testid="name-input" />
        </label>
        <label htmlFor="cardDescription">
          <textarea name="cardInfo" data-testid="description-input" cols="30" rows="10" />
        </label>
        <label htmlFor="firstAttribute">
          <input type="number" name="firstAttribute" data-testid="attr1-input" />
        </label>
        <label htmlFor="secondAttribute">
          <input type="number" name="secondAttribute" data-testid="attr2-input" />
        </label>
        <label htmlFor="thirdAttribute">
          <input type="number" name="thirdAttribute" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          <input type="text" name="image" data-testid="image-input" />
        </label>
        <label htmlFor="cardType">
          <select name="cardType" data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          <input type="checkbox" name="trunfo" data-testid="trunfo-input" />
        </label>
        <button type="submit" name="saveBtn" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;

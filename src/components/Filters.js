import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { onInputChange, filterName, filterRare,
      filterTrunfo, filterCard } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-filter"
          name="filterName"
          value={ filterName }
          onChange={ onInputChange }
        />
        <select
          data-testid="rare-filter"
          name="filterRare"
          value={ filterRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <input
          type="checkbox"
          name="filterTrunfo"
          data-testid="trunfo-filter"
          checked={ filterTrunfo }
          onChange={ onInputChange }
        />
        <button type="submit" onClick={ filterCard }>Buscar</button>
      </div>
    );
  }
}

Filters.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterCard: PropTypes.func.isRequired,
};

export default Filters;

import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { filterOnInputChange, filterName, filterRare,
      filterTrunfo, filterCard } = this.props;
    return (
      <section className="filter-section">
        <h1 className="current-card">Filtros</h1>
        <div id="filter-container">
          <label htmlFor="filterName">
            Nome da Carta:
            <input
              type="text"
              id="filterName"
              data-testid="name-filter"
              name="filterName"
              value={ filterName }
              onChange={ filterOnInputChange }
            />
          </label>
          <label htmlFor="filterRare">
            Raridade:
            <select
              data-testid="rare-filter"
              id="filterRare"
              name="filterRare"
              value={ filterRare }
              onChange={ filterOnInputChange }
            >
              <option value="todas">Todas</option>
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label htmlFor="filterTrunfo">
            É trunfo?
            <input
              type="checkbox"
              id="filterTrunfo"
              name="filterTrunfo"
              data-testid="trunfo-filter"
              checked={ filterTrunfo }
              onChange={ filterOnInputChange }
            />
          </label>
          <button type="submit" onClick={ filterCard }>Buscar</button>
        </div>
      </section>
    );
  }
}

Filters.propTypes = {
  filterOnInputChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
  filterTrunfo: PropTypes.bool.isRequired,
  filterCard: PropTypes.func.isRequired,
};

export default Filters;

import React from 'react';
import PropTypes from 'prop-types';

const Catalogo = ({ items }) => {
  return (
    <>
      <div className="content">
        <h1>Catálogo</h1>
        <p>FILTROS</p>
        <div className="container">
          {items.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} />
              <h2>{item.name}</h2>
              <p>{item.type}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Catalogo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  })).isRequired,
};

export default Catalogo;
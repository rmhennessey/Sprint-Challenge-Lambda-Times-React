import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
        {props.cards.map((card, index) => {
          return <Card key={index} 
            headline={card.headline}
            img={card.img}
            author={card.author}
          />

        })}
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};


export default Cards;
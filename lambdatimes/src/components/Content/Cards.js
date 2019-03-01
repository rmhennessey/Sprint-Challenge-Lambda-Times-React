import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardsContainerDiv = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
`;

const Cards = props => {
  return (
    <CardsContainerDiv>
        {props.cards.map((card, index) => {
          return <Card key={index} 
            headline={card.headline}
            img={card.img}
            author={card.author}
          />

        })}
    </CardsContainerDiv>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)
};


export default Cards;
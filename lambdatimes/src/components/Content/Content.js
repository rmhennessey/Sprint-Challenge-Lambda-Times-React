import React, { Component } from 'react';

import Tabs from './Tabs';
import Cards from './Cards';

// Importing our tab and card data. No need to change anything here.
import { tabData, cardData } from '../../data';
import Carousel from '../Carousel/Carousel';
import styled from 'styled-components';

const ContentContainerDiv = styled.div `
  display: flex; 
  flex-direction: column; 
  align-items: center;
`;

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all',
      tabs: [],
      cards: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs:tabData,
      cards: cardData
    })
  }

  changeSelected = tab => {
    // this function should take in the tab and update the state with the new tab.
    this.setState ({ selected: tab })
  };

  filterCards = () => {
    if (this.state.selected === "all") {
      return this.state.cards;
    } else {
      return this.state.cards.filter(card => {
        return card.tab===this.state.selected})
    }
  }

  render() {
    return (
      <ContentContainerDiv>
        <Tabs tabs={this.state.tabs} selectedTab={this.state.selected} selectTabHandler={this.changeSelected}/>
        <Carousel />
        <Cards cards={this.filterCards()} />
      </ContentContainerDiv>
    );
  }
}

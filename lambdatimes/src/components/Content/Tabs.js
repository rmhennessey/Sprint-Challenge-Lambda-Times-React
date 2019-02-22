import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TabsDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;

const TopicsDiv = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TopicsTittleSpan = styled.span `
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;



const Tabs = props => {
  return (
    <TabsDiv>
      <TopicsDiv>
        <TopicsTittleSpan>TRENDING TOPICS:</TopicsTittleSpan>
        {props.tabs.map((tab, index) => {
          return <Tab key={index} tab={tab} selectedTab={props.selectedTab} selectTabHandler={props.selectTabHandler} />
        })}
      </TopicsDiv>
    </TabsDiv>
  );
};

// Make sure to use PropTypes to validate your types!
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string)
}


export default Tabs;

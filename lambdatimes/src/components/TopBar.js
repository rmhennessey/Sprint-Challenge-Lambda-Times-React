import React from 'react';
import styled from 'styled-components';

// Refactor this component to use styled components and not classNames. 
// You can find the corresponding CSS in the CSS/index.css file

const TopBarDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;

const TopBarContainerDiv = styled.div `
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;

const TopBarContainerLeftDiv = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;

const TopBarContainerLeftSpan = styled.span `
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;

const ContainerCenterDiv = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;

const ContainerCenterSpan = styled.span `
  cursor: pointer;
  margin-right: 5%;

  &:hover {
    text-decoration: underline;
  }
`;

const ContainerRightDiv = styled.div `
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;

const ContainerRightSpan = styled.span `
  cursor: pointer;
`;

const TopBar = () => {
  return (
    <TopBarDiv>
      <TopBarContainerDiv>
        <TopBarContainerLeftDiv>
          <TopBarContainerLeftSpan>TOPICS</TopBarContainerLeftSpan><TopBarContainerLeftSpan>SEARCH</TopBarContainerLeftSpan>
        </TopBarContainerLeftDiv>
        <ContainerCenterDiv>
          <ContainerCenterSpan>GENERAL</ContainerCenterSpan><ContainerCenterSpan>BROWNBAG</ContainerCenterSpan><ContainerCenterSpan>RANDOM</ContainerCenterSpan><ContainerCenterSpan>MUSIC</ContainerCenterSpan><ContainerCenterSpan>ANNOUNCEMENTS</ContainerCenterSpan>
        </ContainerCenterDiv>
        <ContainerRightDiv>
          <ContainerRightSpan>LOG IN</ContainerRightSpan>
        </ContainerRightDiv>
      </TopBarContainerDiv>
    </TopBarDiv>
  )
}

export default TopBar;
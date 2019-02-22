import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardDiv = styled.div `
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: space-between;
  align-items: none;
  flex-direction: column;
  background-color: #fff;
  width: 380px;
  margin-bottom: 16px;
  padding: 24px;
`;

const HeadlineDiv = styled.div `
  font-size: 25px;
  font-family: Didot, serif;
`;

const AuthorDiv = styled.div `
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  margin-top: 15px;
`;

const IMGContainerDiv = styled.div `
  padding-right: 10px;
  border-right: 1px solid lightgrey;
  height: 40px;
`;

const IMGContainerIMG = styled.img `
  width: 40px;
`;

const AuthorSpan = styled.span `
  padding-left: 10px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Card = props => {
  return (
    <CardDiv>
      <HeadlineDiv>{props.headline}</HeadlineDiv>
      <AuthorDiv>
        <IMGContainerDiv>
          <IMGContainerIMG src={props.img} />
        </IMGContainerDiv>
        <AuthorSpan>By {props.author}</AuthorSpan>
      </AuthorDiv>
    </CardDiv>
  );
};

// Make sure to include PropTypes.

Card.propTypes = {
  headline: PropTypes.string,
  img: PropTypes.string,
  author: PropTypes.string
}

export default Card;

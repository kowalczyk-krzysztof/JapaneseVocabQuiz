import styled from 'styled-components';
import {
  smallMargin,
  bigMargin,
  mediumMargin,
  green,
  red,
  blackish,
} from '../../createGlobalStyle';

export const StyledReading = styled.span`
  font-size: 1.5rem;
`;

export const StyledWordContainer = styled.div`
  grid-area: word;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  background: ${blackish};
  border: 1px solid white;
  border-top: 0px;
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  text-align: center;
  align-items: center;
  justify-content: flex-start;

  ul {
    list-style-type: none;
    display: block;
    text-overflow: ellipsis;
    text-align: left;
  }

  @media only screen and (min-width: 480px) {
    margin-right: ${mediumMargin};
    margin-left: ${mediumMargin};
  }

  @media only screen and (min-width: 992px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

export const StyledWord = styled.h1`
  font-size: 3rem;
  color: ${green};
`;

export const StyledFakeWord = styled.h1`
  font-size: 2rem;
  color: ${red};
`;

import styled from 'styled-components';
import {
  smallMargin,
  bigMargin,
  mediumMargin,
  blackish,
  white,
} from '../../createGlobalStyle';

export const StyledScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 1.5fr 0.3fr;
  min-height: 80vh;
  grid-auto-flow: row;
  grid-template-areas:
    'userstats userstats userstats'
    'wordandbuttons wordandbuttons wordandbuttons'
    'wordandbuttons wordandbuttons wordandbuttons';
  border: 1px solid ${white};
  margin-top: 10vh;
  margin-bottom: 10vh;
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  background: ${blackish};
  @media only screen and (min-width: 480px) {
    margin-right: ${mediumMargin};
    margin-left: ${mediumMargin};
  }

  @media only screen and (min-width: 992px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

export const StyledWordAndButtons = styled.div`
  display: grid;
  grid-area: wordandbuttons;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 0.5fr;
  grid-template-areas:
    'word word'
    'buttons buttons';
`;

export const StyledInstructionsContainer = styled.div`
  grid-area: word;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  user-select: none;
  justify-content: center;
  span {
    width: 100%;
    padding: 5px;
  }
`;

export const StyledUserStatsBase = styled.div`
  grid-area: userstats;
  user-select: none;
  height: 100px;
  h1 {
    font-size: 1.5rem;
  }
`;

export const StyledUserStats = styled(StyledUserStatsBase)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'points timer lives';
  background: #6544e9;
  border-bottom: 1px solid ${white};
`;

export const StyledGameOverStats = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    margin: 0 auto;
    user-select: none;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
  }

  h2 {
    margin-top: 0;
  }
`;

import styled from 'styled-components';
import {
  smallMargin,
  bigMargin,
  mediumMargin,
  blackish,
  white,
  StyledWordContainerTemplate,
} from '../../createGlobalStyle';

export const StyledScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 2fr 0.75fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'userstats userstats userstats'
    'wordandbuttons wordandbuttons wordandbuttons'
    'wordandbuttons wordandbuttons wordandbuttons';
  z-index: 0;
  background-color: #4b32ae;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23faf7ff' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
`;

export const StyledWordAndButtons = styled.div`
  display: grid;
  grid-area: wordandbuttons;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 0.75fr;
  grid-template-areas:
    'word word word'
    'buttons buttons buttons';
`;

export const StyledButtons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: center;
  background: ${blackish};
  flex-wrap: wrap;
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  gap: 5vh;
  max-height: 4rem;
  padding: 1rem;
  border: 1px solid ${white};
  border-top: none;

  @media only screen and (min-width: 480px) {
    margin-right: ${mediumMargin};
    margin-left: ${mediumMargin};
  }

  @media only screen and (min-width: 992px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

export const StyledStartScreen = styled(StyledWordContainerTemplate)`
  flex-wrap: wrap;
  border-top: 0;
  border-bottom: 0;
  justify-content: center;
`;

export const StyledInstructionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  user-select: none;
  justify-content: flex-start;
  span {
    width: 100%;
    padding: 5px;
  }
`;

const StyledUserStatsBase = styled.div`
  grid-area: userstats;
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  margin-top: 15vh;
  border: 1px solid ${white};
  padding-bottom: 5px;
  min-height: 95px;

  @media only screen and (max-height: 720px) {
    margin-top: 5px;
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

export const StyledGameTitle = styled(StyledUserStatsBase)`
  grid-area: userstats;
  background: ${blackish};
  display: flex;
  justify-content: center;
  user-select: none;
  border-bottom: 0;

  h1 {
    font-size: 1.5rem;
  }
`;

export const StyledUserStats = styled(StyledUserStatsBase)`
  grid-area: userstats;
  background: #6544e9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'points timer lives';
`;

export const StyledGameOver = styled(StyledUserStats)`
  background: ${blackish};
  justify-content: center;
  display: flex;
  border-bottom: 0px;
  user-select: none;
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

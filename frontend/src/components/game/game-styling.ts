import styled from 'styled-components';
import { smallMargin, bigMargin } from '../../createGlobalStyle';

export const StyledGameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 2fr 0.75fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'userstats userstats userstats'
    'word word word'
    'buttons buttons buttons';
  z-index: 0;
  background-color: #4b32ae;
  background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23faf7ff' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  min-height: 100vh;
`;

export const StyledUserStats = styled.div`
  grid-area: userstats;
  background: #6544e9;
  border: 1px solid white;
  border-bottom: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 'points timer lives';
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  margin-top: ${smallMargin};
  padding-bottom: 5px;

  @media only screen and (min-width: 900px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

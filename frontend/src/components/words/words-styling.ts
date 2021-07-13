import styled from 'styled-components';
import { smallMargin, bigMargin } from '../../createGlobalStyle';

export const StyledWordContainer = styled.div`
  grid-area: word;
  background: #0a0713;
  border: 1px solid white;
  margin-right: ${smallMargin};
  margin-left: ${smallMargin};
  @media only screen and (min-width: 900px) {
    margin-right: ${bigMargin};
    margin-left: ${bigMargin};
  }
`;

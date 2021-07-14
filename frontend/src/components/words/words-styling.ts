import styled from 'styled-components';
import {
  green,
  red,
  StyledWordContainerTemplate,
} from '../../createGlobalStyle';

export const StyledReading = styled.span`
  font-size: 1.5rem;
`;

export const StyledWordContainer = styled(StyledWordContainerTemplate)`
  border-top: 0px;
`;

export const StyledWord = styled.h1`
  font-size: 3rem;
  color: ${green};
`;

export const StyledFakeWord = styled.h1`
  font-size: 2rem;
  color: ${red};
`;

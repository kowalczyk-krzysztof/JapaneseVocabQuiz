import styled from 'styled-components';
import { green, red } from '../../createGlobalStyle';

export const StyledReading = styled.span`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledDefinition = styled.span`
  padding: 5px;
`;

export const StyledWord = styled.h1`
  font-size: 3rem;
  color: ${green};
`;

export const StyledFakeWord = styled.h1`
  font-size: 2rem;
  color: ${red};
`;

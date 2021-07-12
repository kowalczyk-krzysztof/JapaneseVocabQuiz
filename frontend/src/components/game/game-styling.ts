import styled from 'styled-components';

export const StyledGameContainer = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 1fr);
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    'points timer lives'
    '. word .'
    'buttons buttons buttons';
  z-index: 0;
  background: #aa85ee;
  height: 35rem;
  width: 50%;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border: 4px dotted #282f6c;
  border-radius: 25px;
`;

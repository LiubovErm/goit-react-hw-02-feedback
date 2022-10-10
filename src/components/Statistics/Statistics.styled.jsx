import styled from 'styled-components';

export const StatisticsItem = styled.p`
  font-size: ${props => props.theme.fontSizes.m};
   :nth-of-type(1) {
  color: ${props => props.theme.colors.green};
   }
   :nth-of-type(2) {
  color: ${props => props.theme.colors.text};
   }
   :nth-of-type(3) {
  color: ${props => props.theme.colors.red};
   }
`;
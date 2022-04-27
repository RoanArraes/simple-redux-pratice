import styled from 'styled-components';

export const Button = styled.button`
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;
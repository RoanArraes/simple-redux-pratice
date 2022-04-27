import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background};

  @media screen and (max-width: 400px) {
    .counter__button-area {
      button {
        font-size: ${({ theme }) => theme.fontSizes.small};
      }
    }
  }
`;
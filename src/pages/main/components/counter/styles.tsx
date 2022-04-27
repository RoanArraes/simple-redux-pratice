import styled from "styled-components"

export const Counter = {
  Area: styled.div`
    max-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  `,
  ValueArea: styled.div`
    padding: 20px;
    box-sizing: border-box;

    span {
      font-size: ${({ theme }) => theme.fontSizes.big}
    }
  `,
  ButtonsArea: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      background-color: ${({ theme }) => theme.buttonCounterSetValue.backgroundColor};
      color: ${({ theme }) => theme.buttonCounterSetValue.labelColor};
      border: 3px solid transparent;
      margin: 5px;

      :hover {
        border-color: ${({ theme }) => theme.buttonCounterSetValue.borderColor}
      }
    }
  `,
}
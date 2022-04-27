import styled from "styled-components"

export const Counter = {
  Area: styled.div`
    max-width: 400px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border: 4px solid ${({ theme }) => theme.colors.white};
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.colors.background2};
    transition: border 300ms;

    :hover {
      border-color: ${({ theme }) => theme.counter.buttonCounterSetValue.borderColor};
    }
  `,
  ValueArea: styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    span {
      font-size: ${({ theme }) => theme.fontSizes.extreme};
      color: ${({ theme }) => theme.counter.labelValueColor};
      cursor: default;
    }
  `,
  ButtonsArea: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      background-color: ${({ theme }) => theme.counter.buttonCounterSetValue.backgroundColor};
      color: ${({ theme }) => theme.counter.buttonCounterSetValue.labelColor};
      border: 3px solid ${({ theme }) => theme.colors.white};
      margin: 5px;
      transition: border 300ms, color 300ms;

      :hover {
        border-color: ${({ theme }) => theme.counter.buttonCounterSetValue.borderColor};
        color: ${({ theme }) => theme.counter.buttonCounterSetValue.labelColorHover};
      }
    }
  `,
}
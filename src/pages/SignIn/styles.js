import styled from "styled-components";

export const Background = styled.div`
  height: 100vh;
  width: 100%;
  background-image: url("../../background.svg");
  background-size: cover;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-family: "Magra";
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2rem;
  }

  #warning {
    > button {
      border: none;
      border-radius: 3rem;
      background: transparent;
      cursor: pointer;
      position: fixed;
      right: 0;
      bottom: 0;
      > svg {
        fill: #65a077;
      }
    }

    #warning-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: fixed;
      right: 0;
      bottom: 0;
      margin: 3rem;
      background: #A5D2C1;
      width: 20rem;
      height: 8rem;
      box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);
      border-radius: 2rem;
      
    }
  }

  
`;

export const Container = styled.div`
  height: 80rem;
  width: 52rem;
  background: ${({ theme }) => theme.COLORS.PRIMARY_GRADIENT};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 3rem;

  header {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    margin-top: 2.4rem;
    margin-bottom: 2.8rem;
    > h1 {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
      font-family: "Days One";
      font-size: 6.4rem;
      letter-spacing: 0.01em;
      text-shadow: 2px 2px 1px #095181;
    }
    > img {
      width: 7.2rem;
      height: 6.4rem;
    }
  }

`;

export const Form = styled.form`
  width: 44rem;
  height: 64rem;
  padding: 3rem;
  border-radius: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);

  > h1 {
    color: hsla(208, 37%, 20%, 1);
    font-family: "Magra";
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.4rem;
    letter-spacing: 0.07em;
    text-shadow: 2px 2px 2px #ffffff;
    padding-bottom: 4.5rem;
  }

  label {
    font-family: "Poppins";
    align-self: flex-start;
    font-weight: 400;
    font-size: 2rem;
    line-height: 3rem;
    color: ${({ theme }) => theme.COLORS.BLACK};
    margin-bottom: 5px;
  }

  .message-error {
    font-family: 'Poppins';
    font-style: italic;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 2rem;
    color: #D90000;
  }

  > button {
    margin-bottom: 5rem;
  }
  
  > span{
    margin-bottom: 2.4rem;
  }
 
 
  
`;

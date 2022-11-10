import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    #eff2f9 0%,
    rgba(228, 237, 246, 0.33) 100%
  );

  margin-bottom: 8px;
  border-radius: 3.0rem;
  box-shadow: inset -2px -2px 4px rgba(0, 0, 0, 0.25);

  .content {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: #fff;
    margin: 1.4rem;
    border-radius: 3.0rem;

    > input {
      height: 3.9rem;
      width: 100%;
      border: none;
      border-radius: 3.0rem;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
      padding-left: 1.4rem;
      color: ${({theme}) => theme.COLORS.BLACK};
      ::-webkit-input-placeholder {
        color: #81c3d9;
      }
      input:-moz-placeholder {
        color: #81c3d9;
      }
      textarea:-moz-placeholder {
        color: #81c3d9;
      }
    }

    button {
      margin-right: 1.3rem;
      background: transparent;
      border-radius: 3.0rem;
      border: none;
      color: #81c3d9;
      :hover {
        color: #81dfd9;
      }
    }
  
  }
`;

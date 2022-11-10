import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  
  background: linear-gradient(180deg, rgba(228, 237, 246, 0.33) 0%, #9AB8C5 100%);
  box-shadow: inset 2px 2px 4px rgba(0, 0, 0, 0.25), inset -2px -2px 4px rgba(0, 0, 0, 0.25);  border-radius: 20px;
  height: 4.8rem;
  width: 24rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  font-family: 'Magra';
  font-weight: 700;
  font-size: 2.0rem;
  line-height: 2.4rem;
  color: #FFF;
  text-shadow: 2px 2px 1px rgba(0, 0, 0, 0.7);
  border: none;

  &:hover {
    filter: contrast(1.1);
    cursor: pointer;
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
 `;
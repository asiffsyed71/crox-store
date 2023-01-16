import styled from "styled-components";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 100px;
  width: 150px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  z-index: 5;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const CategoryContainer = styled.div`

height: 240px;
flex: 1 1 30%;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
overflow: hidden;

&:hover {
  cursor: pointer;

  & ${BackgroundImage} {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }

  & ${Body} {
    opacity: 0.9;
  }
`;

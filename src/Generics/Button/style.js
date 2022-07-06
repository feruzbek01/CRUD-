import styled from "styled-components";

export const Container = styled.button`
  width: ${({width})=> width || '120px'};
  height: 40px;
  border-radius: 4px;
  color: white;
  font-size: 18px;
  border: none;
  /* margin: 15px 10px 0 0; */
  margin-top: ${({ mt }) => mt};
  margin-bottom: ${({ mb }) => mb};
  margin-left: ${({ ml }) => ml};
  margin-right: ${({ mr }) => mr};
  :hover {
    cursor: pointer;
  }

  :active {
    transform: scale(0.95);
  }

  ${({ type }) => getType(type)}
`;


const getType = (type) => {
    switch (type) {
      case "primary":
        return {
          background: "blue",
        };
      case "secondary":
        return {
          background: "red",
        };
      case "update":
        return {
          background: "#ff8f00",
        };
      default:
        return {
          background: "#444",
        };
    }
}
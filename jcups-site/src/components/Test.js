import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: column;
  background-color: blue;
`;

const Test = () => {
  return (
    <>
      <MainContainer></MainContainer>
    </>
  );
};

export default Test;

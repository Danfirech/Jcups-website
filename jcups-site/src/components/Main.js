import React from "react";
import styled from "styled-components";
import Header from "./Header";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: column;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
      </MainContainer>
    </>
  );
};

export default Main;

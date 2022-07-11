import React from "react";
import styled from "styled-components";
import Header from "./Header";
import PicSection from "./PicSection";
import Test from "./Test";

const MainContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Main = () => {
  return (
    <>
      <MainContainer>
        <Header></Header>
        <PicSection></PicSection>
        <Test></Test>
      </MainContainer>
    </>
  );
};

export default Main;

import React from "react";
import styled from "styled-components";
import Jcup from "../media/Jcup.png";

const Container = styled.div`
  height: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PicBox = styled.div`
  height: 80%;
  width: 70%;
  background-color: red;
  background-image: url(${Jcup});
`;

const PicSection = () => {
  return (
    <div>
      <Container>
        <PicBox></PicBox>
      </Container>
    </div>
  );
};

export default PicSection;

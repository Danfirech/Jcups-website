import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;
`;

const Left = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Middle = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 40px;
`;

const Logo = styled.div`
  height: 40%;
  width: 80%;
  background-color: white;
`;

const Header = () => {
  return (
    <>
      <Container>
        <Left>
          <Logo>JACUPS LOGO</Logo>
        </Left>
        <Middle></Middle>
        <Right>
          <h5>Tab 1</h5>
          <h5>Tab 2</h5>
          <h5>Tab 3</h5>
          <h5>Tab 4</h5>
        </Right>
      </Container>
    </>
  );
};

export default Header;

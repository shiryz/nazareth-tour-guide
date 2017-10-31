import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
`;

const NavWrapper = styled.div`
  position: fixed;
`;

const NameWrapper = styled.div`
  float: left;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.1);
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Name = styled.span`
  font-size: 2.25rem;
  margin-left: 4rem;
  margin-right: 4rem;
  color: yellow;
`;

const Title = styled.span`
  font-size: 3rem;
  color: yellow;
`;

const TitleWrapper = styled.div`
  text-align: center;
  background-color: blue;
  padding-top: 8rem;
  padding-bottom: 2rem;
`;

const NavBar = () => (
  <Wrapper>
    <NavWrapper>
      <NameWrapper>
        <Name>Eshi Zoaby</Name>
      </NameWrapper>
      <div className="dt dt--fixed w-60 fr">
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#About">
          About
        </a>
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Tour">
          Tour
        </a>
        <a className="dtc tc pv4 bg-black-10 link f2 yellow" href="#Contact">
          Contact
        </a>
      </div>
    </NavWrapper>
    <TitleWrapper>
      <Title>Nazareth Tour Guide</Title>
    </TitleWrapper>
  </Wrapper>
);

export default NavBar;

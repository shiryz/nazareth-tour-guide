import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: left;
  margin-left: 2rem;
  padding-top: 2.5rem;
`;

const Title = styled.span`
  font-size: 2rem;
`;

const Footer = () => (
  <Wrapper>
    <Title>Shireen Zoaby &copy;</Title>
  </Wrapper>
);

export default Footer;

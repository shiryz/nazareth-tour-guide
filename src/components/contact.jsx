import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  background-color: red;
  padding-top: 8rem;
  padding-bottom: 8rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  margin: 0rem;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin: 0erm;
`;

const Contact = () => (
  <Wrapper id="Contact">
    <Title>Contact</Title>
    <Paragraph>
      Wow this tour is about some stuff which i don't know what the hell am i even doing im just trying to fill this
      paragraph with some text just to try it.Wow this tour is about some stuff which i don't know what the hell am i
      even doing im just trying to fill this paragraph with some text just to try itWow this tour is about some stuff
      which i don't know what the hell am i even doing im just trying to fill this paragraph with some text just to try
      it
    </Paragraph>
  </Wrapper>
);

export default Contact;

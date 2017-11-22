import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-left: 5%;
`;

const Name = styled.span`
  font-size: 2.25rem;
  color: #404040;
`;

const A = styled.a`
  color: #666;
`;
const LinksWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
`;

class NavBar extends Component {
  constructor() {
    super();

    this.state = {
      a1: '#282828',
      a2: '#666',
      a3: '#666'
    };

    this.handleAbout = this.handleAbout.bind(this);
    this.handleContact = this.handleContact.bind(this);
    this.handleTour = this.handleTour.bind(this);
  }

  handleAbout() {
    this.setState({ a1: '#282828', a2: '#666', a3: '#666' });
  }

  handleContact() {
    this.setState({ a3: '#282828', a1: '#666', a2: '#666' });
  }

  handleTour() {
    this.setState({ a2: '#282828', a3: '#666', a1: '#666' });
  }

  render() {
    return (
      <Wrapper>
        <NavWrapper>
          <NameWrapper>
            <Name>OUSAMA SALEH</Name>
          </NameWrapper>
          <LinksWrapper>
            <A
              onClick={this.handleAbout}
              className="pt4 pb2 link f3 mh4"
              href="#About"
              style={{ color: this.state.a1 }}
            >
              About
            </A>
            <A
              onClick={this.handleTour}
              className="pv2 link f3 mh4"
              href="#Tour"
              style={{ color: this.state.a2 }}
            >
              Tour
            </A>
            <A
              onClick={this.handleContact}
              className="pv2 link f3 mh4"
              href="#Contact"
              style={{ color: this.state.a3 }}
            >
              Contact
            </A>
          </LinksWrapper>
        </NavWrapper>
      </Wrapper>
    );
  }
}

export default NavBar;

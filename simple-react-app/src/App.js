import React, { Component } from 'react';
import styled from 'styled-components'

const AppWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 height: 100vh;
 background-color: #282c34;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  font-family: Helvetica;
`

const MainMessage = styled.p`
  color: white;
`

const Link = styled.a`
  color: #61dafb;
  text-decoration: none;
  
  :hover {
    color: white;
  }
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <MainMessage>
            Hello React app.
          </MainMessage>
          <Link
            href="https://buildreactapps.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </Link>
        </Header>
      </AppWrapper>
    );
  }
}

export default App;
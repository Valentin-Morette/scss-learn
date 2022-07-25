import "./App.scss";
import React from "react";
import styled from "styled-components";

function App() {
  const Card = styled.div`
    background-color: white;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
  `;

  const Title = styled.h1`
    font-size: 1.5rem;
    margin-top: 1rem;
  `;

  const Frame = styled.img`
    border: 1px solid black;
    border-radius: 1rem;
    margin-top: 2rem;
  `;

  const Description = styled.p`
    font-size: 1.2rem;
    margin-bottom: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: 1rem;
  `;

  const Sup = styled.span`
    font-weight: bold;
  `;

  return (
    <div className="App">
      <div className="card">
        <img src="https://picsum.photos/id/237/200/300" alt="react" />
        <h1>REX</h1>
        <p>
          Les chiens sont <span>supérieurs</span> aux chats. Les chiens sont
          supérieurs aux chats. Les chiens sont supérieurs aux chats.
        </p>
      </div>
      <Card>
        <Frame src="https://picsum.photos/id/1025/200/300" alt="react" />
        <Title>RUFUS</Title>
        <Description>
          Les chiens sont <Sup>supérieurs</Sup> aux chats. Les chiens sont
          supérieurs aux chats. Les chiens sont supérieurs aux chats.
        </Description>
      </Card>
    </div>
  );
}

export default App;

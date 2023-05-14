import React from "react";
import { Body, Card, Header } from "./components";

const App: React.FC<{ className?: string }> = (props) => {
  return (
    <Card className={`card ${props.className}`}>
      <Header />
      <Body />
    </Card>
  );
};

export default App;

import React from "react";
import { Body, Card, Header } from "./components";

const App: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={`card ${className}`}>
      <Header />
      <Body />
    </Card>
  );
};

export default App;

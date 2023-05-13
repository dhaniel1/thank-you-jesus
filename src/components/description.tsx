import React from "react";
import { Button, Form, Input } from "./shared";

const Description = () => {
  return (
    <div className="description">
      <div className="description__content">
        <div className="description__content--header">
          <h6>Step1/5</h6>
          <h3>Lets start with your name</h3>
          <p>Please fill in the details below</p>
        </div>
        <div className="description__content--body">
          <Form className="description__form">
            <Input className="description__input" label="Enter your name" />
            <Button>Next Step</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Description;

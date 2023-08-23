import { Button, Input } from "./shared";

const Description = () => {
  return (
    <div className="description">
      <div className="description__content">
        <div className="description__content__header">
          <h6>Step1/5</h6>
          <h3>Lets start with your name</h3>
          <p>Please fill in the details below</p>
        </div>
        <div className="description__content--body">
          <form className="description__form">
            <Input
              type="text"
              className="description__input"
              label="Enter your name"
            />
            <Button>Next Step</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Description;

import { FC } from "react";
import Input from "./stories/Input";
import "./App.css";
import Button from "./stories/Button";

const App: FC = () => {
  return (
    <>
      <div>
        <div className="formWrapper">
          <Input placeholder="Name" />
          <Input placeholder="Age" />
        </div>
        <div className="buttonWrapper">
          <Button>Add</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </>
  );
};

export default App;

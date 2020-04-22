import React from "react";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const Content = (props) => {
  let history = useHistory();
  function handleClick() {
    history.push("/Article");
  }
  return (
    <div>
      <h1>{props.location.state.content}</h1>
      <Button onClick={handleClick}>返回</Button>
    </div>
  );
};

export default Content;
import React from "react";

const EditExpensePage = () => {
  console.log(props);
  return (
    <div>
      <h1>Editing {props.match.params.id}</h1>
    </div>
  );
};

export default EditExpensePage;

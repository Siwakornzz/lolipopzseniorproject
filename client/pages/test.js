import React from "react";

const test = () => {
  const a = "asdas ,da sd,a sd,as da,sd asd,a sd,as ";
  console.log(a.replace(/\s/g, ""));
  return <div>test</div>;
};

export default test;

import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);

  return <div className="progress-bar">progress</div>;
};

export default ProgressBar;

/** @format */

import React, { useEffect } from "react";

const TrainingService = (match) => {
  const data = null;
  useEffect(() => {
    data = match;
  }, []);
  return <div>{data}</div>;
};

export default TrainingService;

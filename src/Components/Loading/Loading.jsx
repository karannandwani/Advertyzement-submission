import React, { useEffect, useState } from "react";

import "./Loading.css";

export default function Loading() {
  const [delay, setDelay] = useState(false);

  useEffect(() => {
    setTimeout(() => setDelay(true), 6000);
  });

  return (
    <>
      {delay === false ? (
        <div className="Loading__Container"></div>
      ) : (
        <div>Sorry, this is taking a longer time than usual</div>
      )}
    </>
  );
}

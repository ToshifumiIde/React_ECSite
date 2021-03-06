import React, { useState, useEffect } from "react";

export const LikeButton = () => {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(true);

  const countUp = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    // console.log("Render");
    document.getElementById("counter").addEventListener("click", countUp);
    if (count >= 10) {
      setCount(0);
    }
    return () => {
      // console.log("CleanUp");
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  useEffect(() => {}, [count]);
  return (
    <>
      <button id="counter">いいね数:{count}</button>
      <button
        onClick={() => {
          setLimit(!limit);
        }}
      >
        もっといいねしたい！！
      </button>
    </>
  );
};

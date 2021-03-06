import React, { useState } from "react";
import { LikeButton } from "./LikeButton";

export const Article = (props) => {
  const [isPublished, setIsPublished] = useState(true);

  return (
    <>
      <h2>{props.title}</h2>
      <p>順番は{props.order}です</p>
      <p>
        <label htmlFor="check">公開状況：</label>
        <input
          type="checkbox"
          checked={isPublished}
          id="check"
          onClick={() => {
            setIsPublished(!isPublished);
          }}
        />
      </p>
      <LikeButton />
    </>
  );
};

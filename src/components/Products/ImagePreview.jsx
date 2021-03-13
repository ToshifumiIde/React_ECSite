import React from "react";

const ImagePreview = (props) => {
  return (
    <div className="p-media__thumb u-text-center" onClick={() => {}}>
      <img src={props.image} alt="プレビュー画像です" id={props.id} />
      <div className="module-spacer--extra--small "></div>
      <p
        onClick={() => {
          props.delete(props.id);
        }}
      >
        商品登録を取り消す
      </p>
    </div>
  );
};

export default ImagePreview;

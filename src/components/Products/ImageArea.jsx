import React, { useCallback } from "react";
import { IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import { storage } from "../../Firebase";
import ImagePreview from "./ImagePreview";

const useStyles = makeStyles({
  icon: {
    width: 48,
    height: 48,
  },
});

const ImageArea = (props) => {
  const classes = useStyles();

  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });
      //blob=不変の生データであるファイルの様なオブジェクト

      //Generate filename by generating Random 16 digits strings
      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((num) => S[num % S.length])
        .join("");

      // choose uploadRef by using fileName
      const uploadRef = storage.ref("images").child(fileName);
      const uploadTask = uploadRef.put(blob);

      //画像のUploadが終了したらstorageに格納されているURLをダウンロード
      //fileNameとdownloadURLを用いてnewImageオブジェクトのプロパティに各々格納
      //useState()のsetImage()メソッドに、スプレッド公文を用いて既存のデータとnewImageをmergeする
      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          props.setImages((prevState) => [...prevState, newImage]);
        });
      });
    },
    [props.setImages]
    //props.setImagesの中身が書き換わったときには作り直す
  );

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm("写真を削除しますか？");
      if (!ret) {
        return false; //削除しない場合、以下の処理は実行しない
      } else {
        const newImages = props.images.filter((image) => image.id !== id);
        props.setImages(newImages);
        return storage.ref("images").child(id).delete();
      }
    },
    [props.images]
  );

  return (
    <div>
      <div className="p-grid__list-images">
        {props.images.length > 0 &&
          props.images.map((image) => (
            <ImagePreview id={image.id} image={image.path} key={image.id} delete={deleteImage}/>
          ))}
      </div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton className={classes.icon}>
          <label>
            <AddPhotoAlternateIcon />
            <input
              className="u-display-none"
              type="file"
              id="image"
              onChange={(e) => {
                console.log("クリックされました");
                uploadImage(e);
              }}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};

export default ImageArea;

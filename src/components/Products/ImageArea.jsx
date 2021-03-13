import React from "react";
import { IconButton } from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";

const useStyles = makeStyles({
  icon:{
    width:48,
    height:48,
  }
})

const ImageArea = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div className="u-text-right">
        <span>商品画像を登録する</span>
        <IconButton className={classes.icon}>
          <label htmlFor="">
            <AddPhotoAlternateIcon />
            <input className="u-display-none" type={"file"} id={"image"}
            // onChange={(e)=>{
            //   uplodeImage(e)
            // }}
            />
          </label>
        </IconButton>
      </div>
    </div>
  );
};

export default ImageArea;

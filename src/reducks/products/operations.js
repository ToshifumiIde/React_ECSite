import { firebaseTimestamp, db } from "../../Firebase";
import { push } from "connected-react-router";

const productsRef = db.collection("products");

export const saveProduct = (name, description, category, gender, price) => {
  return async (dispatch) => {
    const timestamp = firebaseTimestamp.now(); //現在時刻の取得
    const data = {
      category: category,
      description: description,
      gender: gender,
      name: name,
      price: parseInt(price, 10),
      //文字列で受け取ったデータを10進数の整数に変換
      updated_at: timestamp,
    };
    const ref = productsRef.doc(); //firebaseで自動にidを生成する
    const id = ref.id; //自動生成したidを格納
    data.id = id; //dataオブジェクトに自動生成したidを追加
    data.crated_at = timestamp;

    return productsRef
      .doc(id)
      .set(data)
      .then(push("/"))
      .catch((error) => {
        throw new Error(error);
      });
    //生成したidとdataをfirebaseのdoc()メソッドとset()メソッドに各々格納
  };
};

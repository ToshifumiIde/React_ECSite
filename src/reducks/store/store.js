import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";

//Import Reducers
import { UsersReducer } from "../users/reducers";
import { ProductsReducer } from "../products/reducers";

export default function createStore(history) {
  return reduxCreateStore(
    //reduxのcreateStoreメソッドの別名
    combineReducers({
      products: ProductsReducer,
      router: connectRouter(history),
      users: UsersReducer,
    }), //combineReducers()にて分割したReducersをまとめる
    applyMiddleware(routerMiddleware(history), thunk)
  );
}

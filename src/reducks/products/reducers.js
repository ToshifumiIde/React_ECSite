// import * as Actions from "./actions";
import initialState from "../store/initialState";

export const ProductsReducer = (state = initialState.products , actions) =>{
  switch(actions.type) {
    // case Actions. :
    //   return {
    //     ...state,
    //     ...sctions.payload,
    //   }
    // case Actions. :
    //   return {

    //   }
    default:
      return state;
  }
}
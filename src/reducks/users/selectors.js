import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);
//第二引数では、state.usersの中のuidを取得している
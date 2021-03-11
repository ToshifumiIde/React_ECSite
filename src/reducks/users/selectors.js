import { createSelector } from "reselect";

const usersSelector = (state) => state.users;

export const getIsSignedIn = createSelector(
  [usersSelector],
  state => state.isSignedIn
)

export const getUserId = createSelector(
  [usersSelector],
  state => state.uid
);
//第二引数では、state.usersの中のuidを取得している

export const getUserName = createSelector(
  [usersSelector],
  state => state.username
);
//第二引数では、state.usersの中のuidを取得している
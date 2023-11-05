import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

const selectedUser = ({ user }: RootStateT) => ({
  _id: user.user._id,
  email: user.user.email,
  username: user.user.username,
  profilePicture: user.user.profilePicture,
  isAuthenticated: user.user.isAuthenticated,
});

export const selectUser = createSelector(selectedUser, (user) => user);

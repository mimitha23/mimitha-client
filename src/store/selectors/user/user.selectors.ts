import { createSelector } from "@reduxjs/toolkit";
import { RootStateT } from "store/store";

// MEMORISED SELECTORS
const selectedUser = ({ user }: RootStateT) => ({
  _id: user.user._id,
  email: user.user.email,
  username: user.user.username,
  profilePicture: user.user.profilePicture,
  isAuthenticated: user.user.isAuthenticated,
});

// SELECTORS
const selectUser = createSelector(selectedUser, (user) => user);

export { selectUser };

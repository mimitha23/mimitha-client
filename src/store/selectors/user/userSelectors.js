import { createSelector } from "@reduxjs/toolkit";

const selectedUser = ({ user }) => ({
  isAuthenticated: user.user.isAuthenticated,
  _id: user.user._id,
  email: user.user.email,
  username: user.user.username,
  profilePicture: user.user.profilePicture,
});

export const selectUser = createSelector(selectedUser, (user) => user);

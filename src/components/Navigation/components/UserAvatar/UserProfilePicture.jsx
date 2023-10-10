import * as Styled from "./styles/UserProfilePicture.styled";

export default function UserProfilePicture({
  username,
  profilePicture,
  setShowUserDropdown,
}) {
  return (
    <Styled.UserProfilePicture
      onClick={() => setShowUserDropdown((prev) => !prev)}
    >
      <img src={profilePicture} alt={username} />
    </Styled.UserProfilePicture>
  );
}

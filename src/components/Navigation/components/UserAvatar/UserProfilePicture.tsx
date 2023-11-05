import * as Styled from "./styles/UserProfilePicture.styled";

interface UserProfilePictureT {
  username: string;
  profilePicture: string;
  setShowUserDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserProfilePicture: React.FC<UserProfilePictureT> = ({
  username,
  profilePicture,
  setShowUserDropdown,
}) => {
  return (
    <Styled.UserProfilePicture
      onClick={() => setShowUserDropdown((prev) => !prev)}
    >
      <img src={profilePicture} alt={username} />
    </Styled.UserProfilePicture>
  );
};

export default UserProfilePicture;

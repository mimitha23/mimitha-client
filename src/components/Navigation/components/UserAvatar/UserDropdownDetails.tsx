// import { CameraIcon } from "components/Layouts/Icons";
import * as Styled from "./styles/UserDropdownDetails.styled";

import { UserT } from "interface/DB/user.types";

interface UserDropdownDetailsT {
  user: UserT;
  setShowUserDropdown: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDropdownDetails: React.FC<UserDropdownDetailsT> = ({
  user,
  setShowUserDropdown,
}) => {
  return (
    <Styled.UserDropdownDetails>
      <figure
        className="mutable-fig"
        onClick={() => setShowUserDropdown((prev) => !prev)}
      >
        <img src={user.profilePicture} alt={user.username} />
      </figure>

      <div className="user__email-and-username">
        <span className="user__username">{user.username}</span>
        <span className="user__email">{user.email}</span>
      </div>

      {/* <label htmlFor="" className="camera-label">
        <CameraIcon />
      </label> */}
    </Styled.UserDropdownDetails>
  );
};

export default UserDropdownDetails;

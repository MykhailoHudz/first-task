import UserInfoContListItem from "../UserInfoContListItem/UserInfoContListItem";
import { UserInfoCont, UserInfoContTitle } from "./UserInfoContainer.styled";

type UserInfoContainerProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  personDescription: string;
  setShowInformation: (value: boolean) => void;
};

function UserInfoContainer({
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  personDescription,
  setShowInformation,
}: UserInfoContainerProps) {
  const onBackButtonClick = () => {
    setShowInformation(false);
  };

  return (
    <UserInfoCont>
      <UserInfoContTitle>Your information</UserInfoContTitle>
      <ul>
        <UserInfoContListItem
          itemTitle="First name:"
          itemDescription={firstName}
        />

        <UserInfoContListItem
          itemTitle="Last name:"
          itemDescription={lastName}
        />

        <UserInfoContListItem
          itemTitle="Phone number:"
          itemDescription={phoneNumber}
        />

        <UserInfoContListItem
          itemTitle="Email address:"
          itemDescription={emailAddress}
        />

        <UserInfoContListItem
          itemTitle="Short description:"
          itemDescription={personDescription}
        />
      </ul>

      <button type="button" onClick={onBackButtonClick}>
        Go Back
      </button>
    </UserInfoCont>
  );
}

export default UserInfoContainer;

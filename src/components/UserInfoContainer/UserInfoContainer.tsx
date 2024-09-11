import {
  UserInfoCont,
  UserInfoContParagraph,
  UserInfoContTitle,
} from "./UserInfoContainer.styled";

type UserInfoContainerProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  personDescription: string;
};

function UserInfoContainer({
  firstName,
  lastName,
  phoneNumber,
  emailAddress,
  personDescription,
}: UserInfoContainerProps) {
  return (
    <UserInfoCont>
      <UserInfoContTitle>Your information</UserInfoContTitle>
      <ul>
        <li>
          <UserInfoContParagraph>
            First name: <span>{firstName}</span>
          </UserInfoContParagraph>
        </li>
        <li>
          <UserInfoContParagraph>
            Last name: <span>{lastName}</span>
          </UserInfoContParagraph>
        </li>
        <li>
          <UserInfoContParagraph>
            Phone number: <span>{phoneNumber}</span>
          </UserInfoContParagraph>
        </li>
        <li>
          <UserInfoContParagraph>
            Email address: <span>{emailAddress}</span>
          </UserInfoContParagraph>
        </li>
        <li>
          <UserInfoContParagraph>
            Short description: <span>{personDescription}</span>
          </UserInfoContParagraph>
        </li>
      </ul>
    </UserInfoCont>
  );
}

export default UserInfoContainer;

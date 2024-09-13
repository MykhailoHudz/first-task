import { UserInfoContParagraph } from "./UserInfoContListItem.styled";

function UserInfoContListItem({
  itemTitle,
  itemDescription,
}: {
  itemTitle: string;
  itemDescription: string;
}) {
  return (
    <li>
      <UserInfoContParagraph>
        {itemTitle} <span>{itemDescription}</span>
      </UserInfoContParagraph>
    </li>
  );
}

export default UserInfoContListItem;

import RegistrationForm, {
  TypeInitialValues,
} from "../RegistrationForm/RegistrationForm";
import { useState } from "react";
import UserInfoContainer from "../UserInfoContainer/UserInfoContainer";

function RegistrationSection() {
  const [formValues, setFormValues] = useState<null | TypeInitialValues>(null);
  const [showInformation, setShowInformation] = useState(false);

  return (
    <section>
      {!showInformation && (
        <RegistrationForm
          setFormValues={setFormValues}
          setShowInformation={setShowInformation}
        />
      )}
      {formValues && showInformation && (
        <UserInfoContainer
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          phoneNumber={formValues.phoneNumber}
          emailAddress={formValues.emailAddress}
          personDescription={formValues.personDescription}
          setShowInformation={setShowInformation}
        />
      )}
    </section>
  );
}

export default RegistrationSection;

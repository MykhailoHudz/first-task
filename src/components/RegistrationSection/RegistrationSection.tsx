import RegistrationForm from "../RegistrationForm/RegistrationForm";
import { useState } from "react";
import UserInfoContainer from "../UserInfoContainer/UserInfoContainer";

function RegistrationSection() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    personDescription: "",
  });

  return (
    <section>
      <RegistrationForm setFormValues={setFormValues} />
      {formValues?.firstName && (
        <UserInfoContainer
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          phoneNumber={formValues.phoneNumber}
          emailAddress={formValues.emailAddress}
          personDescription={formValues.personDescription}
        />
      )}
    </section>
  );
}

export default RegistrationSection;

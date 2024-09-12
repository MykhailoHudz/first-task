import RegistrationForm, {
  TypeInitialValues,
} from "../RegistrationForm/RegistrationForm";
import { useState } from "react";
import UserInfoContainer from "../UserInfoContainer/UserInfoContainer";

function RegistrationSection() {
  const [formValues, setFormValues] = useState<null | TypeInitialValues>(null);

  return (
    <section>
      {!formValues && <RegistrationForm setFormValues={setFormValues} />}
      {formValues && (
        <UserInfoContainer
          firstName={formValues.firstName}
          lastName={formValues.lastName}
          phoneNumber={formValues.phoneNumber}
          emailAddress={formValues.emailAddress}
          personDescription={formValues.personDescription}
          setFormValues={setFormValues}
        />
      )}
    </section>
  );
}

export default RegistrationSection;

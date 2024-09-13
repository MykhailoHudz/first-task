import RegistrationForm, {
  TypeInitialValues,
} from "../RegistrationForm/RegistrationForm";
import { lazy, Suspense, useState } from "react";
// import UserInfoContainer from "../UserInfoContainer/UserInfoContainer";
const UserInfoContainer = lazy(
  () => import("../UserInfoContainer/UserInfoContainer")
);

function RegistrationSection() {
  const [formValues, setFormValues] = useState<null | TypeInitialValues>(null);

  return (
    <section>
      {!formValues && <RegistrationForm setFormValues={setFormValues} />}
      <Suspense fallback={<h2>Loading...</h2>}>
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
      </Suspense>
    </section>
  );
}

export default RegistrationSection;

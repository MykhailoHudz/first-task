import { useFormik, FormikHelpers } from "formik";
import { basicSchema } from "../../schemas";
import {
  RegForm,
  RegFormSbtBtm,
  RegistrationFormInputsList,
} from "./RegistrationForm.styled";
import { REGISTRATION_FORM_PHONE_MASK } from "../../constants";
import RegistrationFormListItem from "../RegistrationFormListItem/RegistrationFormListItem";

export type TypeInitialValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  personDescription: string;
};

type RegistrationFormProps = {
  setFormValues: (values: TypeInitialValues) => void;
  setShowInformation: (value: boolean) => void;
};

function RegistrationForm({
  setFormValues,
  setShowInformation,
}: RegistrationFormProps) {
  const onRegistrationFormSubmit = (
    values: TypeInitialValues,
    actions: FormikHelpers<TypeInitialValues>
  ) => {
    setFormValues(values);
    setShowInformation(true);
    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      personDescription: "",
    },
    validationSchema: basicSchema,
    onSubmit: onRegistrationFormSubmit,
  });

  return (
    <RegForm onSubmit={formik.handleSubmit}>
      <RegistrationFormInputsList>
        <RegistrationFormListItem
          label="First Name:"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          mask={[]}
          formik={formik}
        />

        <RegistrationFormListItem
          label="Last Name:"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          mask={[]}
          formik={formik}
        />

        <RegistrationFormListItem
          label="Phone Number:"
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          placeholder="Phone Number"
          mask={REGISTRATION_FORM_PHONE_MASK}
          formik={formik}
        />

        <RegistrationFormListItem
          label="Email Address:"
          type="text"
          id="emailAddress"
          name="emailAddress"
          placeholder="Email Address"
          mask={[]}
          formik={formik}
        />

        <RegistrationFormListItem
          label=" Description:"
          type="text"
          id="description"
          name="personDescription"
          placeholder="Description"
          mask={[]}
          formik={formik}
        />
      </RegistrationFormInputsList>

      <RegFormSbtBtm
        disabled={Boolean(
          Object.keys(formik.errors).length ||
            Object.values(formik.values).includes("")
        )}
        type="submit"
      >
        Submit
      </RegFormSbtBtm>
    </RegForm>
  );
}

export default RegistrationForm;

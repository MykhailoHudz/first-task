import { useFormik, FormikHelpers } from "formik";
import MaskedInput from "react-text-mask";
import { basicSchema } from "../../schemas";
import {
  ErrorMsg,
  RegForm,
  RegFormSbtBtm,
  RegistrationFormInputsList,
  RegistrationFormInputsListItem,
  RegistrationFormInputsListItemLabel,
} from "./RegistrationForm.styled";

type TypeInitialValues = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  personDescription: string;
};

type RegistrationFormProps = {
  setFormValues: (values: TypeInitialValues) => void;
};

function RegistrationForm({ setFormValues }: RegistrationFormProps) {
  const onRegistrationFormSubmit = (
    values: TypeInitialValues,
    actions: FormikHelpers<TypeInitialValues>
  ) => {
    setFormValues(values);
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
        <RegistrationFormInputsListItem>
          <RegistrationFormInputsListItemLabel htmlFor="firstName">
            First Name:
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </RegistrationFormInputsListItemLabel>
          {formik.errors.firstName && (
            <ErrorMsg>{formik.errors.firstName}</ErrorMsg>
          )}
        </RegistrationFormInputsListItem>

        <RegistrationFormInputsListItem>
          <RegistrationFormInputsListItemLabel htmlFor="lastName">
            Last Name:
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
          </RegistrationFormInputsListItemLabel>
          {formik.errors.lastName && (
            <ErrorMsg>{formik.errors.lastName}</ErrorMsg>
          )}
        </RegistrationFormInputsListItem>

        <RegistrationFormInputsListItem>
          <RegistrationFormInputsListItemLabel htmlFor="phoneNumber">
            Phone Number:
            <MaskedInput
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              mask={[
                "+",
                "3",
                "8",
                " ",
                "(",
                /[0-9]/,
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
              ]}
            />
          </RegistrationFormInputsListItemLabel>

          {formik.errors.phoneNumber && (
            <ErrorMsg>{formik.errors.phoneNumber}</ErrorMsg>
          )}
        </RegistrationFormInputsListItem>

        <RegistrationFormInputsListItem>
          <RegistrationFormInputsListItemLabel htmlFor="emailAddress">
            Email Address:
            <input
              type="text"
              id="emailAddress"
              name="emailAddress"
              placeholder="Email Address"
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
            />
          </RegistrationFormInputsListItemLabel>

          {formik.errors.emailAddress && (
            <ErrorMsg>{formik.errors.emailAddress}</ErrorMsg>
          )}
        </RegistrationFormInputsListItem>

        <RegistrationFormInputsListItem>
          <RegistrationFormInputsListItemLabel htmlFor="description">
            Description:
            <input
              type="text"
              id="description"
              name="personDescription"
              placeholder="Description"
              onChange={formik.handleChange}
              value={formik.values.personDescription}
            />
          </RegistrationFormInputsListItemLabel>

          {formik.errors.personDescription && (
            <ErrorMsg>{formik.errors.personDescription}</ErrorMsg>
          )}
        </RegistrationFormInputsListItem>
      </RegistrationFormInputsList>

      <RegFormSbtBtm type="submit">Submit</RegFormSbtBtm>
    </RegForm>
  );
}

export default RegistrationForm;

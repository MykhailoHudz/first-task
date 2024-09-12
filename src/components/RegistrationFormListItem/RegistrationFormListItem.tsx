import { FormikProps } from "formik";

import { TypeInitialValues } from "../RegistrationForm/RegistrationForm";
import MaskedInput from "react-text-mask";
import {
  ErrorMsg,
  RegistrationFormInputsListItem,
  RegistrationFormInputsListItemLabel,
} from "./RegistrationFormListItem.styled";

type MyFormikProps = FormikProps<TypeInitialValues>;

type TypeRegistrationLitItemProps = {
  label: string;
  type: string;
  id: string;
  name: keyof TypeInitialValues;
  placeholder: string;
  formik: MyFormikProps;
  mask?: (string | RegExp)[];
};

function RegistrationFormListItem({
  formik: { handleChange, handleBlur, values, errors, touched },
  label,
  type,
  id,
  name,
  placeholder,
  mask,
}: TypeRegistrationLitItemProps) {
  return (
    <RegistrationFormInputsListItem>
      <RegistrationFormInputsListItemLabel htmlFor={id}>
        {label}

        {mask ? (
          <MaskedInput
            mask={mask}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[name]}
          />
        )}
      </RegistrationFormInputsListItemLabel>
      {errors[name] && touched[name] && <ErrorMsg>{errors[name]}</ErrorMsg>}
    </RegistrationFormInputsListItem>
  );
}

export default RegistrationFormListItem;

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
  mask: (string | RegExp)[];
};

function RegistrationFormListItem({
  formik,
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

        {mask.length ? (
          <MaskedInput
            mask={mask}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
          />
        ) : (
          <input
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
          />
        )}
      </RegistrationFormInputsListItemLabel>
      {formik.errors[name] && formik.touched[name] && (
        <ErrorMsg>{formik.errors[name]}</ErrorMsg>
      )}
    </RegistrationFormInputsListItem>
  );
}

export default RegistrationFormListItem;

import * as yup from "yup";

export const basicSchema = yup.object().shape({
  firstName: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Name must contain only letters")
    .min(2, "Name must be at least 2 characters")
    .required("Please enter your name"),

  lastName: yup
    .string()
    .matches(/^[a-zA-Zа-яА-Я]+$/, "Surname must contain only letters")
    .min(2, "Surname must be at least 2 characters")
    .required("Please enter your surname"),

  emailAddress: yup
    .string()
    .email("Invalid email format")
    .required("Please enter your email"),

  phoneNumber: yup
    .string()
    .matches(
      /^\+38 \(\d{3}\) \d{2}-\d{2}-\d{3}$/,
      "Invalid phone number format"
    )
    .required("Please enter your phone number"),

  personDescription: yup
    .string()
    .min(10, "Description text must be at least 10 characters")
    .required("Please describe yourself"),
});

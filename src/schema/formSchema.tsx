import * as yup from "yup";

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter the appropriate email address")
    .required(),
  password: yup
    .string()
    .min(8, "Password must have minimum 8 chars")
    .max(64, "Password must have maximum 64 chars")
    .required(),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

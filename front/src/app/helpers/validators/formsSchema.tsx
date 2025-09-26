import * as Yup from "yup";

export default interface InputsPropsType {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface LoginFormData {
  email: "";
  password: "";
}

export interface RegisterFormData {
  email: "";
  password: "";
  confirmPassword: "";
  name: "";
  address: "";
  phone: "";
}

export const LoginValSchema = Yup.object({
  email: Yup.string()
    .email("Invalidate email")
    .required("Requiered validate email"),
  password: Yup.string().min(8).required(),
});

export const LoginInitialValues: LoginFormData = {
  email: "",
  password: "",
};

export const RegisterValSchema = Yup.object({
  email: Yup.string()
    .email("Invalidate email")
    .required("Requiered validate email"),
  password: Yup.string().min(8).required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "No match passwords")
    .required("Requiered value"),
  name: Yup.string().required("Requiered value"),
  address: Yup.string().required("Requiered value"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Requiered validate number")
    .required("Requiered value"),
});

export const RegisterInitialValues: RegisterFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

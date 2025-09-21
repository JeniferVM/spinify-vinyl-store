import * as Yup from "yup";

export default interface InputsPropsType {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const LoginInitialValues = {
  email: "",
  password: "",
};

export const LoginValSchema = Yup.object({
  email: Yup.string()
    .email("Invalidate email")
    .required("Requiered validate email"),
  password: Yup.string().min(8).required(),
});

export const RegisterInitialValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  adress: "",
  phone: "",
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
  adress: Yup.string().required("Requiered value"),
  phone: Yup.string()
    .matches(/^[0-9+\-\s()]+$/, "Requiered validate number")
    .required("Requiered value"),
});

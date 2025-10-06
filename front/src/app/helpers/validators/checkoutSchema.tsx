import * as Yup from "yup";

export default interface InputsPropsType {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface CheckoutData {
  cartNumber: "";
  expirationDate: "";
  cvv: "";
}

export const CheckoutValSchema = Yup.object({
  cartNumber: Yup.string()
    .required("Card number is required")
    .trim()
    .matches(/^\d+$/, "Card number must contain only numbers")
    .min(13, "Card number must be at least 13 digits")
    .max(19, "Card number must be at most 19 digits"),

  expirationDate: Yup.string()
    .required("Expiration date is required")
    .trim()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Format must be MM/YY"),

  cvv: Yup.string()
    .required("CVV is required")
    .trim()
    .matches(/^\d{3,4}$/, "CVV must be 3 or 4 digits"),
});

export const CheckoutInitialValues: CheckoutData = {
  cartNumber: "",
  expirationDate: "",
  cvv: "",
};

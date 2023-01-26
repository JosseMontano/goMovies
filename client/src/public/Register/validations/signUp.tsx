import { requiredText } from "@/global/utilities/fieldRequiered";
import * as Yup from "yup";
import SingUpType from "../interfaces/signUp";



export const initialValues: SingUpType = {
  display_name: "",
  email: "",
  password: "",
  password_confirmation: "",
  accept_conditions: "",
};

const signUp = Yup.object({
  email: Yup.string().required(requiredText),
  password: Yup.string().required(requiredText),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(requiredText),
  display_name: Yup.string().min(3, "3 min").required(requiredText),
  accept_conditions: Yup.string().required(requiredText),
});

export default signUp;

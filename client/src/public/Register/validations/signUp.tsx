import * as Yup from "yup";
import SingUpType from "../interfaces/signUp";

const requiredText = "Este campo es obligatiorio";


export const initialValues: SingUpType = {
  display_name: "",
  email: "",
  password: "",
  password_confirmation: "",
};


const signUp = Yup.object({
  email: Yup.string().required(requiredText),
  password: Yup.string().required(requiredText),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required(requiredText),
  display_name: Yup.string().min(3, "3 min").required(requiredText),
});

export default signUp;

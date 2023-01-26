import { requiredText } from "@/global/utilities/fieldRequiered";
import * as Yup from "yup";
import { LoginType } from "../interfaces/login";

export const initialValues: LoginType = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().required(requiredText),
  password: Yup.string().required(requiredText),
});

export default validationSchema;

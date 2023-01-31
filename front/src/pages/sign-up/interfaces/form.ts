import { IconType } from "react-icons";

export default interface CustomFormType {
  type: string;
  name: string;
  placeholder?: string;
  icon?: JSX.Element;
  extra?: JSX.Element;
}

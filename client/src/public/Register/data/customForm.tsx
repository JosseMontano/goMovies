import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import CustomFormType from "../interfaces/form";

function showIconExtra() {
  return (
    <div>
      <AiTwotoneEyeInvisible
        className="icon"
        style={{ backgroundColor: "transparent" }}
        size={"20px"}
      />
    </div>
  );
}

export const customForm: CustomFormType[] = [
  {
    type: "input",
    name: "email",
    value: "",
    placeholder: "Email",
    icon: <MdEmail />,
  },
  {
    type: "password",
    name: "password",
    value: "",
    placeholder: "Password",
    icon: <GiPadlock />,
    extra: showIconExtra(),
  },
  {
    type: "password",
    name: "password_confirmation",
    value: "",
    placeholder: "Password Confirmation",
    icon: <GiPadlock />,
    extra: showIconExtra(),
  },
  {
    type: "input",
    name: "display_name",
    value: "",
    placeholder: "Name",
    icon: <BsFillPeopleFill />,
  },
  {
    type: "checkbox",
    name: "accept_conditions",
    value: "",
  },
];

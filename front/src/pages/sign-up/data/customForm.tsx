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
    placeholder: "Email",
    icon: <MdEmail />,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    icon: <GiPadlock />,
    extra: showIconExtra(),
  },
  {
    type: "password",
    name: "password_confirmation",
    placeholder: "Password Confirmation",
    icon: <GiPadlock />,
    extra: showIconExtra(),
  },
  {
    type: "input",
    name: "display_name",
    placeholder: "Name",
    icon: <BsFillPeopleFill />,
  },
  {
    type: "checkbox",
    name: "accept_conditions",
  },
];

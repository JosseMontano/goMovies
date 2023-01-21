import { MdEmail } from "react-icons/md";
import { GiPadlock } from "react-icons/gi";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { IconType } from "react-icons";

interface Type {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  icon: IconType;
  extra?: JSX.Element;
}

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

export const customForm: Type[] = [
  {
    type: "input",
    name: "email",
    value: "",
    placeholder: "Email",
    icon: MdEmail,
  },
  {
    type: "password",
    name: "password",
    value: "",
    placeholder: "Password",
    icon: GiPadlock,
    extra: showIconExtra(),
  },
  {
    type: "password",
    name: "password_confirmation",
    value: "",
    placeholder: "Password Confirmation",
    icon: MdEmail,
    extra: showIconExtra(),
  },
  {
    type: "input",
    name: "display_name",
    value: "",
    placeholder: "Name",
    icon: MdEmail,
  },
];

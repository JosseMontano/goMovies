import CustomFormType from "@/public/Register/interfaces/form";
import { AiTwotoneEyeInvisible } from "react-icons/ai";
import { GiPadlock } from "react-icons/gi";
import { MdEmail } from "react-icons/md";


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
    }
  ];
  
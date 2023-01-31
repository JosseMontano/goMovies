import { Formik, Form } from "formik";
import { colorPrimary } from "@/styles/colors";
import { Btn } from "@/components/btn";
import { customForm } from "../../data/customForm";
import signUp, { initialValues } from "../../validations/signUp";
import SingUpType from "../../interfaces/signUp";
import { ShowInputText } from "@/components/loginRegister/showInputText";
import { ShowInputCheck } from "@/components/loginRegister/showInputCheckbox";
import CustomFormType from "../../interfaces/form";

type ComponentFormProps = {
  handleSubmit: (val: SingUpType) => void;
  isLoading: boolean;
};

type mapType = {
  [key: string]: JSX.Element;
};

const IndexForm = ({ handleSubmit, isLoading }: ComponentFormProps) => {
  const msg = isLoading ? "Loading..." : "Sign up";

  function showContent(v: CustomFormType) {
    const map: mapType = {
      accept_conditions: <ShowInputCheck name={v.name} key={v.name} />,
    };
    return map[v.name] ?? <ShowInputText v={v} key={v.name} />;
  }

  return (
    <Formik
      validateOnChange={false}
      initialValues={initialValues}
      validationSchema={signUp}
      onSubmit={(val) => {
        handleSubmit(val);
      }}
    >
      <Form noValidate data-testid="customBtn">
        {customForm.map((v) => showContent(v))}
        <Btn colorPrimary={colorPrimary} msg={msg} />
      </Form>
    </Formik>
  );
};

export default IndexForm
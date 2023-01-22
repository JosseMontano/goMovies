import { Formik, Form, FormikErrors } from "formik";
import { colorPrimary } from "@/global/styles/colors";
import { Btn } from "@/global/components/btn";
import { customForm } from "../../data/customForm";
import signUp, { initialValues } from "../../validations/signUp";
import SingUpType from "../../interfaces/signUp";
import { ShowInputText } from "./showInputText";
import { ShowInputCheck } from "./showInputCheckbox";
import CustomFormType from "../../interfaces/form";

type ComponentFormProps = {
  handleSubmit: (val: SingUpType) => void;
  isLoading: boolean;
};

type mapType = {
  [key: string]: JSX.Element;
};

export const IndexForm = ({ handleSubmit, isLoading }: ComponentFormProps) => {
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
      <Form noValidate>
        {customForm.map((v) => showContent(v))}
        <Btn colorPrimary={colorPrimary} msg={msg} />
      </Form>
    </Formik>
  );
};

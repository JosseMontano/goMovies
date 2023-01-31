import { ErrorMessage, FieldMetaProps, useField } from "formik";
import { useEffect } from "react";

type Props = {
  title?: string;
  placeholder: string;
  name: string;
  type: string;
};

function MyTextInput({ title, ...props }: Props) {
  const [field, meta] = useField(props);

  return (
    <>
      <input {...field} {...props} />
      {/*       <ErrorMessage name={props.name} component="p" className="error" /> */}
    </>
  );
}

export default MyTextInput;

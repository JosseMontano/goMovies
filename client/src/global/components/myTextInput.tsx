import { ErrorMessage, useField } from "formik";

type Props = {
  placeholder: string;
  name: string;
  type:string
};

function MyTextInput({...props }: Props) {
  const [field] = useField(props);
  return (
    <>
      <input className="full" {...field} {...props} />
{/*       <ErrorMessage name={props.name} component="p" className="error" /> */}
    </>
  );
}

export default MyTextInput;

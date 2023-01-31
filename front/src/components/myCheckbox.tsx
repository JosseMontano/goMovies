import { useField } from "formik";

type Props = {
  label: string;
  name: string;
  type: string;
};

function MyCheckBox({ label, ...props }: Props) {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  let error = meta.touched ? meta.error && true : false;
  return (
    <div className="container" title={meta.error}>
      <input {...field} {...props} />
      <span>{label}</span>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
        }
        span {
          margin-left: 5px;
          color: ${error && "red"};
        }
      `}</style>
    </div>
  );
}

export default MyCheckBox;

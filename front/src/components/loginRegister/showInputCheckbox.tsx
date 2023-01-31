import MyCheckBox from "../myCheckbox";

type ShowInputCheckProps = {
  name: string;
};

export const ShowInputCheck = ({ name }: ShowInputCheckProps) => (
  <div className="container">
    <MyCheckBox label={"Accept conditions"} name={name} type={"checkbox"} />
    <style jsx>{`
      .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
      }
    `}</style>
  </div>
);
